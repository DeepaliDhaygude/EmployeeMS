import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmindeptdashComponent } from './admindeptdash/admindeptdash.component';
import { AdmindeptlayoutComponent } from './admindeptlayout/admindeptlayout.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AllrequestComponent } from './allrequest/allrequest.component';
import { AssignedrequesttouserComponent } from './assignedrequesttouser/assignedrequesttouser.component';
import { AssignrequestComponent } from './assignrequest/assignrequest.component';
import { CloserequestComponent } from './closerequest/closerequest.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedashComponent } from './employeedash/employeedash.component';
import { EmployeelayoutComponent } from './employeelayout/employeelayout.component';
import { LoginComponent } from './login/login.component';
import { RequestmasterComponent } from './requestmaster/requestmaster.component';
import { AuthGuard } from './services/auth.guard';
import { StartRequestComponent } from './start-request/start-request.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:AdminlayoutComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'admin',
        component:AdminComponent
      },
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'users',
        component: UsersComponent
      },
      {
        path:'allrequest',
        component:AllrequestComponent
      },{
        path:'assignrequest',
        component:AssignrequestComponent
      }
    ]
  },
  {
    path:'',
    component:AdmindeptlayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'admindeptdash',
        component:AdmindeptdashComponent
      },
      {
        path:'assignedrequesttouser',
        component:AssignedrequesttouserComponent
      },
      {
        path:'startRequest',
        component:StartRequestComponent
      },
      {
        path:'closeRequest',
        component : CloserequestComponent
      }
    ]
  },
  {
    path:'',
    component:EmployeelayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'employeedash',
        component:EmployeedashComponent
      },
      {
        path:'requestmaster',
        component:RequestmasterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
