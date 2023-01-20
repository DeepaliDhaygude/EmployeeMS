import { Component, OnInit } from '@angular/core';
import { AdmindeptService } from '../services/admindept.service';

@Component({
  selector: 'app-assignedrequesttouser',
  templateUrl: './assignedrequesttouser.component.html',
  styleUrls: ['./assignedrequesttouser.component.css']
})
export class AssignedrequesttouserComponent implements OnInit {
  users : any;
  username : string = '';
  userObj :any;
  assignedRequests : any;
  constructor(private adminSrv:AdmindeptService) {
    this.users = [];
    this.userObj = {
      UserId: 0,
      Role: "",
      UserName: "",
      Password: "",
      ReportsTo: 0,
      EmployeeId: 0
    };
    this.assignedRequests = [];
   }

  ngOnInit(): void {
    const uname = localStorage.getItem('UserName');
    if(uname != null){
      this.username = uname;
    }
    this.getUsers();
    this.getAssignedRequestByUserId();
  }

  getAssignedRequestByUserId(){
    debugger;
    console.log("User Id => ",this.userObj.EmployeeId);
    this.adminSrv.getAssignedRequestByUserId(this.userObj.EmployeeId).subscribe((result:any)=>{
      debugger;
      this.assignedRequests = result;
    });
  }

  getUsers(){
    debugger;
    this.adminSrv.getUsers().subscribe((result:any)=>{
      debugger;
      this.users = result;
      this.userObj = this.users.find((m:any)=>m.UserName == this.username);

      this.adminSrv.getAssignedRequestByUserId(this.userObj.EmployeeId).subscribe((result:any)=>{
        debugger;
        this.assignedRequests = result;
      });

    });
  }

}
