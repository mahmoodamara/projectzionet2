import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.mode';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { MessageService } from '../services/message.service';
import { ProductsService } from '../services/products.service';
import { UserserviceService } from '../services/userservice.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
path: String = "src/assets/images/arrow.png"
userActiv:any[]=[];
name :string;
email:string=localStorage.getItem('token');
userMessages:Message = new Message();
showmassege:boolean = false;




  constructor(private userservice:UserserviceService, private messageservice:MessageService,private productservice : ProductsService , private cartservice:CartService) {

   }

  ngOnInit(): void {
    this.getUser();
    this.getProducts();
    this.get5mostproducts();
    this.get5mostcheapestproducts();
  }

  getUser(){
    this.userservice.getUser().subscribe(res=>{
      this.userActiv=res;
      this.name=this.userActiv[0].username;
  })
  }
  postMessage(){
    this.userMessages.userName= this.name;
    this.userMessages.userEmail=this.email;
     this.messageservice.PostMessageUser(this.userMessages).subscribe(res=>{
      this.showmassege = true;
      setTimeout(()=>{
        this.showmassege = false;
    }, 3000);
     })
  }



  products :Product[]=[];
  most5salesproducts :Product[]=[];
  most5cheapestproducts :Product[]=[];


getProducts(){
  this.productservice.getProduct().subscribe(res=>{
    this.products=res;
  })
}


addToCart(product:Product){
  this.cartservice.addToCart(product).subscribe((res)=>{
    alert("add sucss")
    
  });
  product.quantity--;
  product.sales++;
  this.productservice.updateProduct(product).subscribe((res)=>{
  });
}

get5mostproducts(){
  this.productservice.get5mostsalesproducts().subscribe((res =>{
this.most5salesproducts=res;
  }));
}

get5mostcheapestproducts(){
  this.productservice.get5mostcheapestproducts().subscribe((res =>{
this.most5cheapestproducts=res;
  }))
}

}
