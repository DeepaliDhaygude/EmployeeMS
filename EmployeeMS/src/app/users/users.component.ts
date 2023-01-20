import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
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
