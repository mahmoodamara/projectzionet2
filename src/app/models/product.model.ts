export class Product {
  _id:any
  serialNumber:number;
  name:string;
  price:number;
  category:string;
  description:string;
  img:string;
  quantity:Number;
  sales:Number;
  
  constructor( serialNumber:number,name:string,price:number,category:string,description:string,img:string,quantity:Number,sales:Number){
    this.serialNumber=serialNumber;
    this.name=name;
    this.price=price;
    this.category=category;
    this.description=description;
    this.img=img;
    this.quantity=quantity;
    this.sales=sales;
  }
}

