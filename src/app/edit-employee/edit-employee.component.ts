import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from '../employee.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {


  employee:any;
  idEmployee:number;


  constructor(public activatedRoute:ActivatedRoute,
              public employeeService:EmployeeService,
              public router:Router) {
    this.idEmployee=activatedRoute.snapshot.params['id'];


  }

  ngOnInit() {
    console.log("ggggggggggggggggg");

    this.employeeService.getEmployee(this.idEmployee).subscribe(data =>{
      this.employee=data;
      console.log(data);

      console.log(this.employee);
    },error => {
      console.log(error);
    });
  }


  editDemande() {
    this.employeeService.updateDe(this.employee).subscribe(data=>{
      alert("mise à jour effectué");
      this.router.navigate(['/employee']);
    },erro=>{
      console.log(erro);
      alert("Probleme");
    });
  }



}
