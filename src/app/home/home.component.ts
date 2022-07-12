import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.mode';
import { MessageService } from '../services/message.service';
import { UserserviceService } from '../services/userservice.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
path: String = "src/assets/images/arrow.png"
userActiv:any[]=[];
name :string;
email:string=localStorage.getItem('token');
userMessages:Message = new Message();
showmassege:boolean = false;




  constructor(private userservice:UserserviceService, private messageservice:MessageService) {

   }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userservice.getUser().subscribe(res=>{
      this.userActiv=res;
      this.name=this.userActiv[0].username;
  })
  }
  postMessage(){
    this.userMessages.userName= this.name;
    this.userMessages.userEmail=this.email;
    this.userMessages.adminMessage='';

     this.messageservice.PostMessage(this.userMessages).subscribe(res=>{
      this.showmassege = true;
      setTimeout(()=>{
        this.showmassege = false;
    }, 3000);
     })
  }
}
