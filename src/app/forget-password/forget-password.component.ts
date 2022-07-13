import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  email :string  ='';

  constructor(private usersservice:UserserviceService,private router : Router) { }

  ngOnInit(): void {

  }

  sendEmail(){
    if(this.email.length>0){
      this.usersservice.Sendemail(this.email).subscribe((res=>{
        localStorage.setItem('token', this.email);
        this.router.navigate(['verification']);

      }))
  }
}

}
