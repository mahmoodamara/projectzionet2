import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';




@Injectable({
  providedIn: 'root'
})
export class CartService {

  

  username:string='';
  carts=[];
  email:string=localStorage.getItem('token');
  age:number;
  baseURL: string = 'http://localhost:3000/api/carts';
  url:string = `/searchOfEmail?email=${this.email}`;

  headers = { 'content-type': 'application/json' };
  constructor(private http:HttpClient){}

  getcart(): Observable<any> {
    return this.http.get(this.baseURL +this.url);
  }

  addToCart(product: Product ): Observable<any>{
    let body = JSON.stringify(new Cart(product,this.email));
    return this.http.post(this.baseURL, body,{
    headers: this.headers
    });
  }


  updateCart(cart):Observable<any>{
    let headers ={ 'content-type':'application/json' };
    let body = JSON.stringify(cart);
    return this.http.put(this.baseURL  + `/${cart._id}`, body,{//cart.quantity -> the thing we want to update
    headers: headers});
    }
    
  deleteOfCart(id: string) {
    return this.http.delete(this.baseURL + `/${id}`);
  }











}
