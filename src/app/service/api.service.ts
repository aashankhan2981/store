import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  products:any
  constructor(private http:HttpClient) {
    console.log("getproduct constructor")

    this.getProduct().subscribe((res)=>{
      this.products = res

    })
   }
   getProducts(){
    console.log("getproducts")

     return this.products
   }
  getProduct(){
    const url = 'https://fakestoreapi.com/products/'
    console.log("getproduct")
    return this.http.get(url)
    .pipe(map((res)=>res))
  }
}
