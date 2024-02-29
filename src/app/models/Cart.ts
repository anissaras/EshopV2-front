import { CartItem } from "./CartItem";

export class Cart{
  items: CartItem[] = [];// default value is empty
  totalCount: number = 0;
  totalPrice: number = 0
}
