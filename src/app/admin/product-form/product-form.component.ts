import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm:FormGroup;
  showErrorMessage: boolean=false;
  showSucssMessage: boolean=false;
  productOne = new Product(0,"",0,"","","");
  productOne2 = new Product(0,"",0,"","","");
  actiontime:number;
  image:string="assets/images/loginphoto.jpg"


  constructor(private formBuilder:FormBuilder, private router:Router ,private productsservice:ProductsService) { }

  ngOnInit(): void {
    //  this.createaddform();
    this.getProductOne();
  }


/*

createaddform(){
  this.productForm=this.formBuilder.group({
    serialNumber:['',[Validators.required]],
    name:['',[Validators.required ,Validators.minLength(2)]]
  , price:['',[Validators.required ]]
  , category:['',[Validators.required ,Validators.minLength(3)]]
  , description:['',[Validators.required ,Validators.minLength(5)]]
  , img:['',[Validators.required ,Validators.minLength(3)]],

})
}

*/
onSubmit(){

  this.productsservice.addProduct(this.productOne)
  .subscribe(
    res => {
      this.showSucssMessage = true;
      setTimeout(() => this.showSucssMessage = false, 2000);
    },(err)=>{
      console.log(err)
      this.showErrorMessage = true;
      setTimeout(() => this.showErrorMessage = false, 2000);

    })

 }

 getProductOne(){
  if(this.productsservice.products.length>0){
   this.productOne = this.productsservice.getProductOne()[0];
  }
 }


}
