import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cart!: Cart;
  //@Output() newItemEvent = new EventEmitter<Number>();
 // @Output() newItemEvent2 = new EventEmitter<Number>();


  constructor(
    private cartService: CartService,
    private router: Router){
      this.cartService.getCartObservable().subscribe((cart)=>{
        this.cart = cart;
      })
    }

  removeFromCart(cartItem: CartItem){
    alert(`remove this item from cart`);
    this.cartService.removeFromCart(cartItem.article.id_article);
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.article.id_article, quantity);
  }
  /*
  addNewItem(value: Number) {
    this.newItemEvent.emit(this.cart.totalPrice);
  }
  addNewItem2(value: Number) {
    this.newItemEvent2.emit(this.cart.totalCount);
  }*/

  goToPayment(){
    this.router.navigateByUrl(`payment/${this.cart.totalPrice}?item=${this.cart.totalCount}`);
  }
}

