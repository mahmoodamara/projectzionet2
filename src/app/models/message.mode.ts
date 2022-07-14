export class Message {
      _id:any;
      time:Date;
      userName:string;
      userEmail:string;
      userMessage:Array<Message>;
      adminMessage:Array<Message>;
      adminName:string;
      messuser:string
      messadmin:string

/*
      constructor(userName:string,userEmail:string,userMessage:string,adminMessage:string){
        this.userName=userName;
        this.userEmail=userEmail;
        this.userMessage=userMessage;
        this.adminMessage=adminMessage;
      }
      */
}
