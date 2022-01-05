import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { SearchingService } from 'src/app/service/searching.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data:any
  productList:any
  all:any
  blocks : boolean = true
  active = 'ALL ITEMS'
  search:any
  constructor(router:Router,private api:ApiService,private cart:CartService,private searchService:SearchingService) {
    // this.router.navigate(["schools", id]);
    this.data = [
      {
        url:"../../../assets/svgs/all.jpg",
        title:"ALL ITEMS",
        class:"max-w-[60px] lg:max-w-[100px]"
      },
      {
        url:"../../../assets/svgs/electronics.jpg",
        title:"Electonics",
        class:"relative right-4 max-w-[60px] lg:max-w-[100px]"
      },
      {
        url:"../../../assets/svgs/fashion.jpg",
        title:"Fashion",
        class:"lg:max-w-[55px] max-w-[30px]"
      },
      {
        url:"../../../assets/svgs/jew.jpg",
        title:"Jewellery",
        class:"max-w-[54px] lg:max-w-[100px] relative top-4"
      },
    ]

   }
   findingproduct(entry:any){
     this.productList = this.all
     if(entry){
      this.productList = this.productList.filter((item:any)=>{
        if(item.title.toLowerCase().includes(entry) || item.description.toLowerCase().includes(entry) || item.category.toLowerCase().includes(entry) ){
          return item
        }


      })
  
     }
      

   }
   
  addProd(item:any){
    this.cart.addItem(item)
  }
  changeValues(event:any){
    this.productList = this.all
    if(event[0]=="all"){
      this.productList = this.all
      this.active = "ALL ITEMS"

      
    }
    else{
      this.productList = this.productList.filter((prod:any)=>{
        if(prod.category == event[0] || prod.category == event[1]){
          return prod
        }
        
      }
      )
     
      if(event[0]=="men's clothing" ){
        this.active = "Fashion"

      }
      else if(event[0]=="jewelery"){
        this.active = "Jewellery"
      }
      else {
        this.active = "Electonics"

      }
     
    }
  }
  seeProduct(item:any){
    this.cart.setSingle(item)

  }
  
  ngOnInit(): void {

     this.api.getProduct().subscribe((res)=>{
      this.productList = res
      this.all = res
     })
    if(this.api.getProducts()){
    this.all = this.api.getProducts()

    }
    
    this.searchService.getEntry().subscribe((res)=>{
      this.search = res
      this.findingproduct(this.search)

    })
  }

}
