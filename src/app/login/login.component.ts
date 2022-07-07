import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup;
  signupForm:FormGroup;
  showErrorMessage: boolean=false;
  showSucssMessage: boolean=false;

  actiontime:number;
  image:string="assets/images/loginphoto.jpg"


  constructor(private formBuilder:FormBuilder, private router:Router ,private usersservise:UserserviceService) { }

  ngOnInit(): void {
      this.createaddformLogin();
      this.createaddform();
  }

  createaddformLogin(){
    this.loginForm=this.formBuilder.group({
    email:['',[Validators.required ,Validators.email]]
  , password:['',[Validators.required ,Validators.minLength(8)]]

  })
}


createaddform(){
  this.signupForm=this.formBuilder.group({
   username:['',[Validators.required ,Validators.minLength(3)]]
  , email:['',[Validators.required ,Validators.email]]
  , password:['',[Validators.required ,Validators.minLength(8)]]
  , phone:['',[Validators.required ,Validators.minLength(9)]],

})
}

onSubmitLogin(){
  this.usersservise.loginUser(this.loginForm.value)
  .subscribe(
    res => {
      this.showSucssMessage = true;
      setTimeout(() => this.showSucssMessage = false, 2000);
      localStorage.setItem('token', this.loginForm.value.email);
      this.router.navigate(['home']);
    },(err)=>{
      console.log(err)
      this.showErrorMessage = true;
      setTimeout(() => this.showErrorMessage = false, 2000);

    })

 }

 onSubmit(){
  this.usersservise.PostUser(this.signupForm.value)
 .subscribe((data)=>{
  console.log(typeof(this.signupForm.value.phone));
  localStorage.setItem('token', data.token);
  this.showSucssMessage = true;
  setTimeout(() => this.showSucssMessage = false, 2000);
   this.signupForm.reset();
 },(err)=>{
  this.showErrorMessage = true;
  setTimeout(() => this.showErrorMessage = false, 2000);
  });
 }

}
