import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.mode';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageservice : MessageService) { }

  message:Message[] = []
  messageUser:Message[] = []
  userActiv =''
  users:Message[]=[];
  userMessages:Message = new Message();

  ngOnInit(): void {
    this.getMessages();
   }

  getMessages(){
    this.messageservice.getUsers().subscribe(res=>{
        this.message=res;
    })
  }

  getUserMessage(user:Message){
      this.userActiv=user.userName
      this.userMessages = user;
      this.userMessages.userMessage='';
      this.messageservice.getUserMessage(user.userEmail).subscribe(res=>{
          this.messageUser=res;
      })
  }

  postMessage(){
     this.messageservice.PostMessage(this.userMessages).subscribe(res=>{
       this.getMessages();
       this.getUserMessage(this.userMessages);
     })
  }





}
