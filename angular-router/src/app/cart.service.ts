import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  cartUrl = "http://192.168.3.19:3000/cart";

  addCart(data : any){
    return this.http.post(this.cartUrl, data);
  }
  getCartItems(){
    return this.http.get(this.cartUrl); 
  }

}
