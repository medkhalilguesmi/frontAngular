import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getAllEmployees(): Observable<any>{
    return this.http.get('http://localhost:8081/api/employees/list');
  }
  public deleteEmployee(id:number){
    return this.http.delete("http://localhost:8081/api/employees/delete/"+id);

  }
  public getEmployee(id:number){
    return this.http.get("http://localhost:8081/api/employees/get/"+id);
  }
  public  updateDe(employee:any){
    return this.http.put("http://localhost:8081/api/employees/update",employee);

  }

  public  add(employee:Employee){
    return this.http.post("http://localhost:8081/api/employees/add",employee);

  }



}
