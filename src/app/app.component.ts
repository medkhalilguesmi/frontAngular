import { Component } from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JardinEnfantFront';
  employees: any;
  constructor(private employeeService: EmployeeService ) {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void{
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employees = data ;
        console.log("employyes list: ",this.employees);
      },error => {

      }
    );
  }
}
