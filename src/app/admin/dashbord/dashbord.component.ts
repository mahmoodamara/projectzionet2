import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DashbordService } from 'src/app/services/dashbord.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  products :Product[]=[];
  countUsers:any[]=[];
  countMessages:any[]=[];
  countProducts:any[]=[];

  constructor(private productservice : ProductsService,private dashbordservice:DashbordService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCountUsers();
    this.getCountMessages();
    this.getCountProducts();
  }
  getProducts(){
  this.productservice.getProduct().subscribe(res=>{
    this.products=res;
  })
  }

  getCountUsers(){
    this.dashbordservice.getCountUsers().subscribe(res=>{
      this.countUsers=res;
    })
  }

  getCountMessages(){
    this.dashbordservice.getCountMessages().subscribe(res=>{
      this.countMessages=res;
    })
  }

  getCountProducts(){
    this.dashbordservice.getCountProducts().subscribe(res=>{
      this.countProducts=res;
    })
  }

  addToForm(product:Product){
    this.productservice.products.push(product);
  }




}
