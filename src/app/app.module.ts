import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';
import { HeaderComponent } from './header/header.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import {FormsModule} from '@angular/forms';
import { AddemployeeComponent } from './addemployee/addemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ParentComponent,
    EnfantComponent,
    HeaderComponent,
    EditEmployeeComponent,
    AddemployeeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
