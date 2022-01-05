import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// behaviour subject can behave as a subscriber and observer
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:any=[]
  singleItems:any=[]
  count:number=0
  itemList = new BehaviorSubject<any>([])
  Single = new BehaviorSubject<any>([])
  constructor() {
    const store = localStorage.getItem("cart")
    const sing = localStorage.getItem("single")

    if(store ){
      this.cartItems = JSON.parse(store)
    }
    if(sing){
      this.singleItems = JSON.parse(sing)
    }

   }
   getSingle(){
    return this.singleItems
   }
   setSingle(item:any){
     localStorage.setItem("single",JSON.stringify(item))
     this.singleItems = item

     
     
   }
  addItem(item:any){
    Object.assign(item,{quantity:1,total:item.price})

    this.count = 0

    console.log(this.cartItems)
    this.cartItems.forEach((prod:any,index:number)=>{
      if( prod.id==item.id){
      prod.quantity+=1
      prod.total +=item.price
      this.count+=1

      }
    })
    if(this.count===0){
    this.cartItems.push(item)
    this.itemList.next(this.cartItems)
    localStorage.setItem("cart",JSON.stringify(this.cartItems))

    }
    else{
      this.itemList.next(this.cartItems)
    localStorage.setItem("cart",JSON.stringify(this.cartItems))


    }
    
  }
  deleteItem(item:any){
    this.cartItems.map((prod:any,index:any)=>{
      if(prod.id==item.id){
        this.cartItems.splice(index,1)
        this.itemList.next(this.cartItems)
      }
    localStorage.setItem("cart",JSON.stringify(this.cartItems))

    })

  }
  empty(){
    this.cartItems = []
    this.itemList.next([])
    localStorage.setItem("cart",JSON.stringify(this.cartItems))

  }
  getItem(){
    const storage = localStorage.getItem("cart")

    if(storage){
      this.cartItems = JSON.parse(storage)
      this.itemList.next(this.cartItems)
    }
    return this.itemList.asObservable()
  }
  
}
