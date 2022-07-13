import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
  Animalcounter:number=0;
  horrorcounter:number=0;
  romancecounter:number=0;
  Cookbookscounter:number=0;
  Healthcounter:number=0;
  historycounter:number=0;
  countall:number=0;

  posts$ = this.productservice;
  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getproductsbycategory();
  }

  products :Product[]=[];
  productbycategory :Product[]=[];


  getProducts(){
    this.productservice.getProduct().subscribe(res=>{
      this.products=res;
  for(let i of this.products){
    this.countall++;
      if(i.category=="Animal"){
        this.Animalcounter++;
      }
      if(i.category=="horror"){
        this.horrorcounter++;
      }
      if(i.category=="cook"){
        this.Cookbookscounter++;
      }
      if(i.category=="health"){
        this.Healthcounter++;
      }
      if(i.category=="history"){
        this.historycounter++;
      }
      if(i.category=="romance"){
        this.romancecounter++;
      }

      
  }
    })
  }



  selectedProduct:String ="";
  showProductsComponent : boolean = false;
  
  showanimal(){
    this.selectedProduct = "Animal";  
    this.getproductsbycategory(); 
  }
  showromance(){
    this.selectedProduct = "romance" ; 
    this.getproductsbycategory(); 
  }
  showcook(){
    this.selectedProduct = "cook" ; 
    this.getproductsbycategory(); 
  }
  showhealth(){
    this.selectedProduct = "health";
    this.getproductsbycategory(); 
  }
  showhistory(){
    this.selectedProduct = "history";
    this.getproductsbycategory(); 
  }
  showhorror(){
    this.selectedProduct = "horror";
    this.getproductsbycategory(); 
  }
  getproductsbycategory(){
    
    this.productservice.getProductbycategory(this.selectedProduct).subscribe(res =>{
      this.productbycategory=res;
    })

    
  }
  

  
}
