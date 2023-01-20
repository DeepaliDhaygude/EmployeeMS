import { Component, OnInit } from '@angular/core';
import { AdmindeptService } from '../services/admindept.service';

@Component({
  selector: 'app-closerequest',
  templateUrl: './closerequest.component.html',
  styleUrls: ['./closerequest.component.css']
})
export class CloserequestComponent implements OnInit {
  obj : any;
  closeReqObj : any;
  result : boolean;
  allRequests : any;
  constructor(private adminDeptSrv : AdmindeptService) {
    this.closeReqObj = {
      RequestId: 0,
      AssignedTo: 0
    };
    this.obj = {
      RequestId: 0,
      AssignedTo: 0
    };
    this.result = false;
    this.allRequests = [];
  }

  ngOnInit(): void {
  }

  onCloseRequest(){
    this.adminDeptSrv.getAllRequests().subscribe((result)=>{
      this.allRequests = result;

      this.obj = this.allRequests.find((m:any)=> m.RequestId == this.closeReqObj.RequestId);

      this.closeReqObj.AssignedTo = this.obj.EmployeeId;
    });

    this.adminDeptSrv.closeRequest(this.closeReqObj).subscribe((result:any)=>{
      this.result = result;
    });

  }
}
