import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title = 'JardinEnfantFront';
  employees: any;
  constructor(private employeeService: EmployeeService, private router: Router ) {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void{
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employees = data ;
        console.log(this.employees);
        console.log("employyes list: ",this.employees);
      },error => {

      }
    );
  }


  delete(d,i) {
    console.log(i);
    console.log(d);
    console.log(this.employees);
    this.employeeService.deleteEmployee(d.id).subscribe(data =>{
      console.log(i);
      console.log(d);
    this.getEmployees();
    }, error => {
      console.log(error);
    });

  }

  onEdit(id) {
    this.router.navigate(['/edit',id]);


  }

  onAdd() {
    this.router.navigate(['/add']);

  }
}
