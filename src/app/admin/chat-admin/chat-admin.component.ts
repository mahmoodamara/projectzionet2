import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.mode';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-chat-admin',
  templateUrl: './chat-admin.component.html',
  styleUrls: ['./chat-admin.component.css']
})
export class ChatAdminComponent implements OnInit {

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

  date(date){
    let d = new Date(date);
    let time = d.getHours() + ":" + d.getMinutes();
    if(d.getHours()>=12 && d.getHours()<24){
      time +="pm"
    }
    else{
      time +="am"
    }

    return time;
  }


}
