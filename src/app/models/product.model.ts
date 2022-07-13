export class Product {
  _id:any
  serialNumber:number
  name:string;
  price:number;
  category:string;
  description:string;
  img:string;
  
  constructor( serialNumber:number,name:string,price:number,category:string,description:string,img:string){
    this.serialNumber=serialNumber;
    this.name=name;
    this.price=price;
    this.category=category;
    this.description=description;
    this.img=img;
  }
}

