import { LatLng } from "leaflet";
import { Cart } from "./Cart";
import { CartItem } from "./CartItem";

export class Order{
  C_Nom!:string;
  C_Num!: string;
  C_Exp!: string;
  C_Cvv!: string;
  subTotal!:number;
  totalPrice!:number;
  C_status!:string;
  CreatedAt?: string;
  addressLatLng?:LatLng;
  items?:CartItem[];
  name?:string;
  address?:string;
}
