import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { IOrder } from '../Shared/interfacs/IOrder';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  checkoutForm!:FormGroup;
  isSubmitted = false;
 // returnUrl ='payment';

  subTotal!:any;
  subTotal2!:any;

  constructor(// cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router){
      activatedRoute.params.subscribe((params)=>{
        if(params['id']){
          this.subTotal2 = params['id'];
        }});
        activatedRoute.queryParams.subscribe((params)=>{
          if(params['item']){
            this.subTotal = params['item'];
          }});
    }

  ngOnInit(): void {
     this.checkoutForm = this.formBuilder.group({
      C_Nom: ['', Validators.required],
      C_Num: ['', Validators.required],
      C_Exp: ['', Validators.required],
      C_Cvv: ['', Validators.required]
     });
     //this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc(){
    return this.checkoutForm.controls;
  }

  submit(){
    if(this.checkoutForm.invalid){
      this.toastrService.error('Form is invalid, please fill the input');
      console.error();
      return;
    }
      alert(
      `C_Nom: ${this.fc[`C_Nom`].value},
      C_Num: ${this.fc[`C_Num`].value},
      C_Exp: ${this.fc[`C_Exp`].value},
      C_Cvv: ${this.fc[`C_Cvv`].value},`
     );

     const order : IOrder = {
      C_Nom: this.fc['C_Nom'].value,
      C_Num: this.fc['C_Num'].value,
      C_Exp: this.fc['C_Exp'].value,
      C_Cvv: this.fc['C_Cvv'].value,
      subTotal: this.subTotal,
      totalPrice: this.subTotal2,
      C_Status:'Payee',
    };
    this.toastrService.success(
      `Dear ${order.C_Nom}, your comand is on going`);
    this.toastrService.info(`Please, keep your phone connected, we'll contact you soon`)
    this.router.navigateByUrl(`home`);
  }

}
