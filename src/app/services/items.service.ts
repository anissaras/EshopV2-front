import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
//import { items } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITEMS_BY_ARTICLE, ITEMS_BY_ID_URL, ITEMS_BY_SEARCH_URL, ITEMS_URL } from '../Shared/Urls';
@Injectable({
  providedIn: 'root',
})
export class ItemsService {

  constructor( private http:HttpClient ){}

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(ITEMS_URL) ;
  }

  getAllItemBySearchTerm(searchTerm:string){
    return this.http.get<Item[]>(ITEMS_BY_SEARCH_URL + searchTerm);
  }

  getItemById(ItemId: string):Observable<Item> {
    return this.http.get<Item>(ITEMS_BY_ID_URL + ItemId)
}
getItemByArticle(ArticleId: string):Observable<Item> {
  return this.http.get<Item>(ITEMS_BY_ARTICLE + ArticleId)
}
}
