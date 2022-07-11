import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product []  = [];


  getProductOne(){
    return this.products;
  }


  baseURL: string = 'http://localhost:3000/api/';
  headers = { 'content-type': 'application/json' };
  productn:Product;
  constructor(private http: HttpClient) {}
  getProduct(): Observable<any> {
    return this.http.get(this.baseURL + 'products');
  }

  addProduct(product: Product): Observable<any> {
      let body = JSON.stringify(product);
      return this.http.post(this.baseURL + 'products', body, {
      headers: this.headers
      });
  }

  updateProduct(product: any): Observable<any> {
    let body = JSON.stringify(product);
    return this.http.put(this.baseURL + `products/${product._id}`, body,
    {
      headers: this.headers
    });
  }

  deleteOfCart(id: string) {
    return this.http.delete(this.baseURL + `products/${id}`);
  }





}
