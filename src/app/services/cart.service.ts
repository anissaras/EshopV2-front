import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { CartItem } from '../models/CartItem';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //private cart:Cart = new Cart();
  private cart:Cart = this.getCartFromLocalStorage();

  private cartSubject : BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor(){

  }

  addToCart(article:Article):void{
    let cartItem = this.cart.items.find(
      item => item.article.id_article === article.id_article
    );
    if(cartItem) return ;
    this.cart.items.push(new CartItem(article));
    this.cart.totalCount = this.cart.items.length;
    this.setCartToLocalStorage();

  }


  removeFromCart(articleId: string):void{
    this.cart.items = this.cart.items
    .filter(item => item.article.id_article!= articleId);
    this.setCartToLocalStorage();

  }

  changeQuantity(articleId:string, quantity:number):void{
    let cartItem = this.cart.items
    .find(item => item.article.id_article == articleId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.article.prix;
    this.setCartToLocalStorage();

  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();

  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage():void{
   this.cart.totalPrice = this.cart.items
   .reduce((prevSum, currentItem) =>prevSum+currentItem.price,0)

   this.cart.totalCount = this.cart.items
   .reduce((prevSum, currentItem) =>prevSum+currentItem.quantity,0)

   const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);

    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }

}
