import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  products : any
  @Output() event:EventEmitter<any> = new EventEmitter()
  @Input() url:string="" 
  @Input() productList:any
  @Input() title:string=""
  @Input() class:string=""
  @Input() active:any
  category:any
  
  titles = 'ALL ITEMS'
  
  constructor(private service:ApiService) { 
    
   }
  filter(title:string){
          
    this.titles = title
    if(title=="ALL ITEMS"){
   
      this.category = ["all"]
    }
   
    else if(title=="Electonics"){
      
     this.category=["electronics"]
    }
    else if(title == "Fashion"){
     this.category = ["men's clothing","women's clothing"]
    }
    else if(title == "Jewellery"){
      this.category = ["jewelery"]
     }
    this.event.emit(this.category)
  }
  ngOnInit(): void {
   
  }

}
