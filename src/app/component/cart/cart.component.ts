import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartTable : Array<string>
  grandTotal:number=0
  cartItems : any
  constructor(private items : CartService) {
    this.cartTable = [
      "Sr No.","Prdouct Name","Product Image","Description","Price","Quantity","Total","Action"
    ]
    
   }
   delete(prod:any){
     this.items.deleteItem(prod)
   }
   Empty(){
     this.items.empty()
   }
  ngOnInit(): void {
    this.items.getItem().subscribe((res)=>{
      this.cartItems = res
      this.cartItems.map((item:any)=>{
        this.grandTotal += item.total
        this.grandTotal.toFixed(2)

      })
    })
  }

}
