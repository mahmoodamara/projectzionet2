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
  j=1;

  ngOnInit(): void {
    this.getMessages();
    // this.getusers();
   }

  getMessages(){
    this.messageservice.getUsers().subscribe(res=>{
        this.message=res;
        console.log(this.message)
    })
  }

  // getusers(){
  //   this.messageservice.getmessages().subscribe(res=>{
  //       this.users=res;
  //       console.log(this.users)
  //   })
  // }

  getUserMessage(user){
      this.userActiv=user
     // this.userMessages.userMessage='';
      this.messageservice.getUserMessageEmail(user.userEmail).subscribe(res=>{
          this.messageUser=res;
      })
  }

  postMessage(){
    this.userMessages.userEmail =this.messageUser[0].userEmail ;
    this.userMessages.userName =this.messageUser[0].userName ;
     this.messageservice.PostMessageAdmin(this.userMessages).subscribe(res=>{
       this.getMessages();
       this.getUserMessage(this.userActiv);
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
