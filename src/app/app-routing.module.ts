import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import {EmployeeComponent} from './employee/employee.component';
import {EnfantComponent} from './enfant/enfant.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {AddemployeeComponent} from './addemployee/addemployee.component';
const routes: Routes = [
{ path: 'employee', component:  EmployeeComponent},
{ path: 'parent', component: ParentComponent },

{ path: 'enfant', component: EnfantComponent },
  {
    path: 'edit/:id',
    component: EditEmployeeComponent,
  },
  {
    path: 'add',
    component: AddemployeeComponent,
  },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
