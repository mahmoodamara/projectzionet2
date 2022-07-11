import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products :Product[]=[];
  constructor(private productservice : ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
getProducts(){
  this.productservice.getProduct().subscribe(res=>{
    this.products=res;
  })
}

  addToForm(product:Product){
    this.productservice.products.push(product);
  }

}
