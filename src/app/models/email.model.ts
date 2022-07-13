
export class Email {
  _id:string;
  email: string;
  rand:number;
  password:string;
  constructor(email:string,password:string){
      this.email=email;
      this.password=password;
  }
}
