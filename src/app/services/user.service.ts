import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Order } from '../models/Order';
import { User } from '../models/user.model';
import { IOrder } from '../Shared/interfacs/IOrder';
import { IUserLogin } from '../Shared/interfacs/IUserLogin';
import { IUserRegister } from '../Shared/interfacs/IUserRegister';
import { USER_LOGIN_URL, USER_ORDER_URL, USER_REGISTER_URL } from '../Shared/Urls';

const USER_KEY = 'User';
const ORDER_KEY = 'Order';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject =
  new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservale:Observable<User>;

  private orderSubject =
  new BehaviorSubject<Order>(this.getOrderFromLocalStorage());
  public orderObservale:Observable<Order>;

  constructor(private http:HttpClient,
    private toastrService:ToastrService){

    this.userObservale = this.userSubject.asObservable();
    this.orderObservale = this.orderSubject.asObservable();

  }

  public get currentUser():User{
    return this.userSubject.value;
  }
  public get currentOrder():Order{
    return this.orderSubject.value;
  }

  login(userLogin: IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL,userLogin)
    .pipe(tap({
      next :(user) =>{
        //toastMessage
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(
          `Welcome to BGStyle website ${user.nom}!`,
          `login Successful`
        )
      }, error:(errorResponse)=>{
        this.toastrService.error(errorResponse.error, 'Login Failed');
      }
    })
    );
  }

register(userRegister: IUserRegister): Observable<User>{
  return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
    tap({
      next: (user) => {
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(
          `Welcome to BGStyle website ${user.nom}!`,
          `Register Successful`
        )
      }, error:(errorResponse)=>{
        this.toastrService.error(errorResponse.error, 'register Failed');
      }

    })
  )
}
//logout
  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  NouveauOrder(){
    this.orderSubject.next(new Order());
    localStorage.removeItem(ORDER_KEY);
    window.location.reload();
  }

//setter
  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private setOrderToLocalStorage(order:Order){
    localStorage.setItem(ORDER_KEY, JSON.stringify(order));
  }


//getter
  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }

  private getOrderFromLocalStorage():Order{
    const orderJson = localStorage.getItem(ORDER_KEY);
    if(orderJson) return JSON.parse(orderJson) as Order;
    return new Order();
  }

//order
order(order: IOrder): Observable<Order>{
  return this.http.post<Order>(USER_ORDER_URL, order).pipe(
    tap({
      next: (order) => {
        this.setOrderToLocalStorage(order);
        this.orderSubject.next(order);
        this.toastrService.success(
          `votre commande est bien enregistré au nom de ${order.C_Nom}`,
        )
      }, error:(errorResponse)=>{
        this.toastrService.error(errorResponse.error, 'Veuillez reessayer');
      }
    })
  )}
  create(order:Order){
  }


}
