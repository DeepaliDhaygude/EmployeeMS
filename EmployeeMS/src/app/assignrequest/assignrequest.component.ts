import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-assignrequest',
  templateUrl: './assignrequest.component.html',
  styleUrls: ['./assignrequest.component.css']
})
export class AssignrequestComponent implements OnInit {
  assignRequestObj : any;
  assignedRequestObj : any;
  allRequests : any;
  userObj : any;
  users : any;
  constructor(private adminSrv:AdminService) {
    this.users=[];
    this.assignRequestObj ={
      RequestId: 0,
      AssignedTo: 0
    }
    this.userObj ={
      UserId: 12,
      Role: "",
      UserName: "",
      Password: "",
      ReportsTo: 0,
      EmployeeId: 0
    }
    this.allRequests = [];
   }


  ngOnInit(): void {
    this.getUsers();
    this.getAllRequests();

  }

  assignRequest(){
    debugger;
    this.adminSrv.assignRequest(this.assignRequestObj).subscribe((result:any)=>{
      debugger;
      this.assignedRequestObj = result;
      this.getAllRequests();
    });
    console.log("Request ID => "+this.assignRequestObj.RequestId);
    console.log("Assigned To => "+this.assignRequestObj.AssignedTo);
  }

  getUsers(){
    this.adminSrv.getUsers().subscribe((result : any)=>{
      this.users = result;
    });
  }
  getAllRequests(){
    this.adminSrv.getAllRequests().subscribe((result : any)=>{
      this.allRequests = result;
    });
}

}
