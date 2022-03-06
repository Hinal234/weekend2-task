import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooddetailsService {

  constructor(private ht: HttpClient) { }
  getdata(){
    
    return this.ht.get("db.json");
    
  }


}
