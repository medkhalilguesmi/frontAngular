import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {Employee} from '../models/employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employee:Employee= new Employee();

  constructor(public activatedRoute:ActivatedRoute,
              public employeeService:EmployeeService,
              public router:Router){}

  ngOnInit(): void {
  }
  editDemande(e:Employee) {
    console.log("empmmmmmmmmmm");
    console.log(e);
    this.employeeService.add(e).subscribe(data=>{
      alert("ajout");
      this.router.navigate(['/employee']);
    },erro=>{
      console.log(erro);
      alert("Probleme");
    });
  }

}
