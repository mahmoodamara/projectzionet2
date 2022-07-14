import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.mode';
import { Product } from '../models/product.model';
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




  constructor(private userservice:UserserviceService, private messageservice:MessageService,private productservice : ProductsService) {

   }

  ngOnInit(): void {
    this.getUser();
    this.getProducts();
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



getProducts(){
  this.productservice.getProduct().subscribe(res=>{
    this.products=res;
  })
}
}
