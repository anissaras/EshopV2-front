import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article } from "../models/article.model";
import { ARTICLES_BY_ID_URL, ARTICLES_BY_SEARCH_URL, ARTICLES_URL } from "../Shared/Urls";

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor( private http:HttpClient ){}

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(ARTICLES_URL) ;
  }

  getAllArticleBySearchTerm(searchTerm:string){
    return this.http.get<Article[]>(ARTICLES_BY_SEARCH_URL + searchTerm);
  }

  getArticleById(ArticleId: string): Observable<Article> {
    return this.http.get<Article>( ARTICLES_BY_ID_URL + ArticleId);
  }
}
