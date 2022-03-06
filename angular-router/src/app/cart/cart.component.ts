import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart:CartService) { }

  cartlist : any;
  insertcartList(data:any){
    this.cartlist = data;
  }

  ngOnInit(): void {
    this.cart.getCartItems().subscribe((data) => this.insertcartList(data));
  }

}
