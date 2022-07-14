import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts:Cart[]=[];
  totalPriceAfter:number;
  constructor(private cartservice:CartService, private productservice:ProductsService) { }

  ngOnInit(): void {
    this.refreshproducts();
  }


  refreshproducts(){
    this.cartservice.getcart().subscribe((data)=>{
    this.carts=data;
    console.log(this.carts);
     });
  }
  // increase product in cart
  increase(serialnumber){
    for(let cart of this.carts){
      if(serialnumber===cart.product.serialNumber){
        cart.quantity++;
        this.cartservice.updateCart(cart).subscribe((data) => {
          console.log(this.carts);
        });
        cart.product.quantity--;
        this.productservice.updateProduct(cart.product).subscribe((res)=>{
        });
      }
    }
  }
// decrease product in cart
decrease(serialnumber){
    for(let cart of this.carts){
      if(serialnumber===cart.product.serialNumber){
        cart.quantity--;
        this.cartservice.updateCart(cart).subscribe((data) => {
          console.log(this.carts);
        });
        cart.product.quantity--;
        this.productservice.updateProduct(cart.product).subscribe((res)=>{
        });
      }
     if(cart.quantity<1){
        this.onDelete(cart);
      }
    }
  }

  price(serialnumber){
    let price=0;
    for(let cart of this.carts){
      if(serialnumber===cart.product.serialNumber){
        price=(cart.product.price* cart.quantity);
      }
    }
    return price;
  }

  totalPriceAftersh(){
    return (this.totalPrice()+12.99);
  }


  totalPrice():number{
    let totalPrice = 0;
   for(let cart of this.carts){
        totalPrice += this.price(cart.product.serialNumber);
    };
    return totalPrice;
}

onDelete(cart) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.cartservice.deleteOfCart(cart._id).subscribe((res) => {
      this.refreshproducts();
    });
    cart.product.quantity-=cart.quantity;
    cart.product.buy-=1;
    cart.product.buy+=1;
    this.productservice.updateProduct(cart.product).subscribe((res)=>{
    });
  }
}





}
