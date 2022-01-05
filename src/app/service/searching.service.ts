import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchingService {

  searchService = new BehaviorSubject('')
  constructor( ) { }
  getEntry(){
   return this.searchService.asObservable()   
  }
  setEntry(entry:string){
    this.searchService.next(entry)

  }
}
