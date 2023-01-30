import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  headArray : any[] = ['UserId','Role','UserName','Password','DeptId','ReportsTo','EmployeeId'];
  showAddUser : boolean;
  users : any;
  constructor(private adminSrv : AdminService) {
    this.users = [];
    this.showAddUser =false;
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.adminSrv.getUsers().subscribe((result:any)=>{
      this.users = result;
    });
  }

  show(){
    this.showAddUser = true;
  }
  hide(){
    this.showAddUser = false;
  }

}
