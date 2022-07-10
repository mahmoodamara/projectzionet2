import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  screenWidth = 0;
  collapsed:boolean = true;
  constructor() { }

  navData: any[] =[{routerLink:'/dashbord',icon:'fa fa-home',lable:'Dashbord'},
                   {routerLink:'/message',icon:'fa fa-home',lable:'Messages'}]

  ngOnInit(): void {
  }

  toggleColapse(){
    this.collapsed = !this.collapsed;
   // this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
  closeSidenav(){
    this.collapsed = false;
   // this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})

  }

}
