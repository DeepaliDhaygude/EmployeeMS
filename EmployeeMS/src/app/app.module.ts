import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeelayoutComponent } from './employeelayout/employeelayout.component';
import { AdmindeptdashComponent } from './admindeptdash/admindeptdash.component';
import { AdmindeptlayoutComponent } from './admindeptlayout/admindeptlayout.component';
import { EmployeedashComponent } from './employeedash/employeedash.component';
import { CustomInterceptor } from './custom.interceptor';
import { AdminComponent } from './admin/admin.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { EmployeeComponent } from './employee/employee.component';
import { RequestmasterComponent } from './requestmaster/requestmaster.component';
import { AllrequestComponent } from './allrequest/allrequest.component';
import { AssignrequestComponent } from './assignrequest/assignrequest.component';
import { AssignedrequesttouserComponent } from './assignedrequesttouser/assignedrequesttouser.component';
import { CloserequestComponent } from './closerequest/closerequest.component';
import { StartRequestComponent } from './start-request/start-request.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeelayoutComponent,
    AdmindeptdashComponent,
    AdmindeptlayoutComponent,
    EmployeedashComponent,
    AdminComponent,
    AdminlayoutComponent,
    EmployeeComponent,
    RequestmasterComponent,
    AllrequestComponent,
    AssignrequestComponent,
    AssignedrequesttouserComponent,
    CloserequestComponent,
    StartRequestComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : CustomInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
