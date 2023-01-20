import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-requestmaster',
  templateUrl: './requestmaster.component.html',
  styleUrls: ['./requestmaster.component.css']
})
export class RequestmasterComponent implements OnInit {
  requestMasterObj : any;
  requests : any;
  employees : any;
  departments : any;
  empId : number = 0;
  empObj : any;
  uname : string ='';
  constructor(private employeeSrv : EmployeeService) {
    this.requestMasterObj ={
      RequestId : 0,
      RequestNo : "",
      EmployeeId : 0,
      CreatedDate : new Date(),
      ExpectedEndDate : "",
      Severity : "",
      DeptId : 0,
      CompletedDate : "",
      AssignedTo : 0,
      State : "",
      RequestDetails : ""
  };
  this.departments = [];
  this.requests = [];
  this.employees = [];
  this.empObj = {
    EmployeeId: 0,
    EmployeeName: "",
    ContactNo: "",
    EmailId: "",
    DeptId: 0
  }
}

  ngOnInit(): void {
    const empName = localStorage.getItem('UserName');
    if(empName !=null){
      this.uname = empName;
      console.log('Employee Name => '+this.uname);
    }

    this.getAllRequests();
    this.getAllDepartments();

  }

  getAllRequests(){
    debugger;
    this.employeeSrv.getAllEmployee().subscribe((result : any)=>{
      debugger;
      this.employees = result;

      this.empObj = this.employees.find((m:any)=>m.EmployeeName == this.uname);
      this.requestMasterObj.EmployeeId = this.empObj.EmployeeId;

      this.employeeSrv.getAllRequests(this.empObj.EmployeeId).subscribe((result:any)=>{
        debugger;
        this.requests = result;
      });
    });
  }

  getAllDepartments(){
    debugger;
    this.employeeSrv.getAllDepartments().subscribe((result:any)=>{
      this.departments = result;
    });
  }
  createRequestMaster(){
    debugger;
    this.employeeSrv.createRequestMaster(this.requestMasterObj).subscribe((result:any)=>{
      debugger;
      this.getAllRequests();
    });
    this.requestMasterObj ={
      RequestId : 0,
      RequestNo : "",
      EmployeeId : 0,
      CreatedDate : new Date(),
      ExpectedEndDate : "",
      Severity : "",
      DeptId : 0,
      CompletedDate : "",
      AssignedTo : 0,
      State : "",
      RequestDetails : ""
  };

  }

}
