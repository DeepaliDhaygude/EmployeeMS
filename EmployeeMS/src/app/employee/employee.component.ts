import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees : any;
  constructor(private adminSrv : AdminService) {
    this.employees = [];
   }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(){
    this.adminSrv.getEmployee().subscribe((result:any)=>{
      this.employees = result;
    });
  }
}
