import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  loginForm:FormGroup;
  signupForm:FormGroup;
  showErrorMessage: boolean=false;
  showSucssMessage: boolean=false;

  actiontime:number;
  image:string="assets/images/loginphoto.jpg"


  constructor(private formBuilder:FormBuilder, private router:Router ,private productsservice:ProductsService) { }

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
  /*
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
*/
 }


}
