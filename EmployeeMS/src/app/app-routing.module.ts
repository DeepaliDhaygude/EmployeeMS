import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmindeptdashComponent } from './admindeptdash/admindeptdash.component';
import { AdmindeptlayoutComponent } from './admindeptlayout/admindeptlayout.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedashComponent } from './employeedash/employeedash.component';
import { EmployeelayoutComponent } from './employeelayout/employeelayout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
