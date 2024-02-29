import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../models/Order';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent  {
  order!:Order ;
  checkoutForm!: FormGroup;
  userName!:string;
  userAddress!:any;
  totalPrice!:any;
  totalCount!:any;
  constructor(
    private cartService:CartService,
    private userService: UserService,
    private toastrService: ToastrService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.totalPrice = params['id'];
      }});
      activatedRoute.queryParams.subscribe((params)=>{
        if(params['item']){
          this.totalCount = params['item'];
        }});

  }

  ngOnInit(): void {
    let {nom,address} = this.userService.currentUser;
    this.userName = this.userService.currentUser.nom;
    this.userAddress = this.userService.currentUser.address;
   }

    goToPayment( ){
      this.cartService.getCartObservable().subscribe((newCart) => {
        this.cartService.clearCart();
    })
      this.router.navigateByUrl(`checkout/${this.totalPrice}?item=${this.totalCount}`);
    }


}
