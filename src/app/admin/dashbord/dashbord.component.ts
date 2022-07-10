import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  @Input() collapsed :boolean ;

  constructor() { }

  ngOnInit(): void {
        console.log(this.collapsed);
  }

  getBodyClass(){
    // let styleClss = '';
    // if(this.collapsed == true){
    //   styleClss = 'dashbord'
    // }
    // else{
    //   styleClss = 'dashbord-close'
    // }
    // return styleClss;
  }






}
