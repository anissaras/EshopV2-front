import { Article } from "./article.model";

export class CartItem{
  constructor(public article: Article){ }
  quantity: number = 0;
  price: number = this.article.prix;
}
