import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from '../models/email.model';
import { User } from '../models/user.model';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  //email:string=localStorage.getItem('token');
  num1:number;
  num2:number;
  num3:number;
  num4:number;
  userCode:Email[]=[];
  user:User[]=[];
  userNew=new User();
  password : string;

  constructor(private userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getCode();
    this.getUser();
  }
  getUser(){
    this.userservice.getUser().subscribe((res)=>{
      this.user = res;
      this.userNew = this.user[0];
    })
  }

  code(){
      const code = this.num1+""+this.num2+""+this.num3+""+this.num4;
      return (Number(code));
  }

  getCode(){
      this.userservice.getcode().subscribe((res=>{
        this.userCode=res;
      }))
  }

  NewPassword(){
    if(this.code() == this.userCode[0].rand){
      console.log("true");
    this.userNew.password = this.password;
    this.userservice.putUser(this.userNew).subscribe(res=>{
      this.router.navigate(['success-page']);
    })
    this.onCodeDelete(this.userCode[0]._id);
  }

  }

  onCodeDelete(_id: string) {
    this.userservice.deleteEmail(_id).subscribe((res) => {
      console.log("delete");
    });
   }

   sendEmail(){
   }

}
