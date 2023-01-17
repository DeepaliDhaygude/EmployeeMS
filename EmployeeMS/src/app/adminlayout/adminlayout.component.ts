import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {
  username : string ='';
  constructor(private router:Router) { }

  ngOnInit(): void {
    const uname =localStorage.getItem('UserName');
    if(uname !=null){
      this.username = uname;
    }
    console.log(this.username);
  }

  logout(){

    localStorage.removeItem('UserName');
    localStorage.removeItem('Role');
    localStorage.removeItem('myToken');
    this.router.navigateByUrl('/login');
  }

  openNav() {
    const nav = document.getElementById("mySidenav");
    if(nav !=null){
      nav.style.width = "250px";
    }
    const navMain = document.getElementById("main");
    if(navMain !=null){

      navMain.style.marginLeft = "250px";
    }
  }
  closeNav() {
    const nav = document.getElementById("mySidenav");
    const navMain = document.getElementById("main");
    if(nav !=null && navMain !=null){
      nav.style.width = "0";
    navMain.style.marginLeft= "0";
    }
  }
}
