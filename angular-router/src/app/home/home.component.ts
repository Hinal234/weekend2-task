import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  food:any;
  constructor(public http:HttpClient, public cart:CartService) {

   }

   cartUrl = "http://192.168.3.19:3000/cart";

   getData(){
     const url="http://192.168.3.19:3000/food";
     this.http.get(url).subscribe(res=>this.showData(res));
   }
   showData(data:any){
     this.food = data;
     console.log(this.food);
   }

   addCart(data:any){
     this.cart.addCart(data).subscribe((data)=>console.log(data));

   }
   
  ngOnInit(): void {
    this.getData();
  }

}
