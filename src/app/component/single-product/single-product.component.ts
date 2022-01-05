import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  items : any
  constructor(private prod : CartService) { }
  addCart(product:any){
    this.prod.addItem(product)

  }
  ngOnInit(): void {
    this.items=this.prod.getSingle()
  }

}
