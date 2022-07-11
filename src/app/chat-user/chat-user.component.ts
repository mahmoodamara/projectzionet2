import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.mode';
import { User } from '../models/user.model';
import { MessageService } from '../services/message.service';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit {

  constructor(private messageservice : MessageService , private userservice:UserserviceService) { }

  message:Message[] = []
  messageUser:Message[] = []
  userActiv :User[]=[];
  users:Message[]=[];
  userMessages:Message = new Message();
  email:string=localStorage.getItem('token');


  ngOnInit(): void {
    this.getMessages();
    this.getUserMessage();
    this.getUser();
   }

  getMessages(){
    this.messageservice.getUsers().subscribe(res=>{
        this.message=res;
    })
  }

  getUserMessage(){
      this.messageservice.getUserMessage(this.email).subscribe(res=>{
          this.messageUser=res;
      })
  }
  getUser(){
    this.userservice.getUser().subscribe(res=>{
      this.userActiv=res;
  })
  }


  postMessage(){
    this.userMessages.userName= this.userActiv[0].username;
    this.userMessages.userEmail=this.userActiv[0].email;
    this.userMessages.adminMessage='';

     this.messageservice.PostMessage(this.userMessages).subscribe(res=>{
       this.getMessages();
       this.getUserMessage();
     })
  }

}
