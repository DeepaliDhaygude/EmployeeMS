import { Component, OnInit } from '@angular/core';
import { AdmindeptService } from '../services/admindept.service';

@Component({
  selector: 'app-start-request',
  templateUrl: './start-request.component.html',
  styleUrls: ['./start-request.component.css']
})
export class StartRequestComponent implements OnInit {
  obj : any;
  startReqobj : any;
  result : boolean;
  allRequests : any;
  constructor(private adminDeptSrv : AdmindeptService) {
    this.startReqobj = {
      RequestId: 0,
      AssignedTo: 0
    };
    this.obj={
      RequestId: 0,
      AssignedTo: 0
    };
    this.result = false;
    this.allRequests = [];
  }

  ngOnInit(): void {

  }
  onStartRequest(){
    debugger;
    this.adminDeptSrv.getAllRequests().subscribe((result:any)=>{
      this.allRequests.result;
      this.obj = this.allRequests.find((m:any)=> m.RequestId = this.startReqobj.RequestId);
      this.startReqobj.AssignedTo = this.obj.EmployeeId;
    });

    this.adminDeptSrv.startRequest(this.startReqobj).subscribe((result:any)=>{
      debugger;
      this.result = result;
    });
  }

}
