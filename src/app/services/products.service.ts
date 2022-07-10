import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any []  = [];

  constructor() { }

  getProduct(){
    return this.products;
  }




}
