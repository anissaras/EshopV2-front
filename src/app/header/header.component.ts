import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchTerm = '';
  user!: User;
  cartQuantity=0;


  constructor(
    private userService:UserService,
    activatedRoute:ActivatedRoute,
    private router:Router,
    private cartService: CartService) {

    cartService.getCartObservable().subscribe((newCart) => {
        this.cartQuantity = newCart.totalCount;
    })
    userService.userObservale.subscribe((newUser)=>{
    this.user = newUser;
  });

    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm'])
      this.searchTerm = params['searchTerm']; });
   };


   //Methode login
  logout(){
    this.cartService.getCartObservable().subscribe((newCart) => {
      this.cartService.clearCart();
  })
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;

  }

  //methode de search
  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  };
}
