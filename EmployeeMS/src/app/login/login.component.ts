import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginClass, userClass } from '../models/classes/master.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj : loginClass;
  userObj : userClass;
  constructor(private loginSrv: LoginService, private route: Router) {
    this.loginObj = new loginClass();
    this.userObj = new userClass();
   }

  ngOnInit(): void {
  }

  onLogin(){
    debugger;
    this.loginSrv.onLogin(this.loginObj).subscribe((result:any)=>{
      if(result.Token){
        this.userObj = result;
        if(this.userObj.Role == 'Admin'){
          this.route.navigateByUrl('/admin');
        }else if(this.userObj.Role == 'AdminDept'){
          this.route.navigateByUrl('/admindeptdash');
        }else if(this.userObj.Role == 'Employee'){
          this.route.navigateByUrl('/employeedash')
        }
        localStorage.setItem('Role',this.userObj.Role);
        localStorage.setItem('UserName',this.userObj.UserName);
        localStorage.setItem('myToken',result.Token);
      }
      else{
        console.log('Error!!!');
      }
    });
  }

}
