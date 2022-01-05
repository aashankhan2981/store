import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { SearchingService } from 'src/app/service/searching.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count : any
  toggle:boolean=false
  data : any
  constructor(private cart:CartService,private searchService:SearchingService) {
  
   }
   search(entry:any){
     this.searchService.setEntry(entry.value)
     

   }
   setToggle(){
    this.toggle=!this.toggle
  }
   
  ngOnInit(): void {
    this.cart.getItem().subscribe((res)=>
    {
      this.data = res
      this.count = this.data.length
      console.log(this.data)
    })
    
  }

}
