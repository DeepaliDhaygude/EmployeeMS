import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users : any;

  constructor(private adminSrv : AdminService) {
    this.users = [];

   }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers(){
    this.adminSrv.getUsers().subscribe((result:any)=>{
      this.users = result;
    });
  }



}
