import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http'

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {

  constructor(private http:Http) { }
  message:string = "Product is added"
  isAdded:boolean = false;
  productObj:object ={};
  addProduct=function(product){
    this.productObj = {
      "name":product.name,
      "price":product.price
    }
    this.http.post("http://localhost:5555/products",this.productObj).subscribe((res:Response)=>{
      console.log(res);
      this.isAdded = true;
    })
  }

  ngOnInit() {

  }

}
