import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:Http) { }
  id:number
  private headers = new Headers({'Content-Type':'application/json'});

  products = [];
  fetchData = function(){
    this.http.get("http://localhost:5555/products").subscribe(
      (res:Response)=>{
        this.products = res.json();
      }
    )
  }

  deleteProduct=function(id){
    if(confirm("are you sure")){
      const url = `${"http://localhost:5555/products"}/${id}`;
      console.log(url);
      return this.http.delete(url,{headers:this.headers}).toPromise()
      .then(()=>{
        this.fetchData();
      });
    }
  }

  ngOnInit() {
    this.fetchData();
  }

}
