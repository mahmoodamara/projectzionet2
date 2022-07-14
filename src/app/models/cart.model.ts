import { Product } from "./product.model";

export class Cart{
    product : Product;
    quantity:number=1  ; 
    email:string;
  

    constructor(product : Product , email:string ){
        this.product=product;
        this.email=email;
     
    }  



}
