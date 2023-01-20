import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-allrequest',
  templateUrl: './allrequest.component.html',
  styleUrls: ['./allrequest.component.css']
})
export class AllrequestComponent implements OnInit {
  allRequests : any;
  constructor(private adminSrv : AdminService) {
    this.allRequests = [];
   }

  ngOnInit(): void {
    this.getAllRequests();
  }

  getAllRequests(){
    this.adminSrv.getAllRequests().subscribe((result : any)=>{
      this.allRequests = result;
    });
}
}
