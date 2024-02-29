import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { Item } from '../models/item.model';
import { Match } from '../models/match.model';
import { ArticlesService } from '../services/articles.service';
import { CartService } from '../services/cart.service';
import { ItemsService } from '../services/items.service';
import { MatchingService } from '../services/matching.service';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent {

  article!: Article;
  articleMatch!: Article[];
  ItemsObservable!: Item;

  constructor(
    activatedRoute: ActivatedRoute,
    articleService:ArticlesService,
    itemService:ItemsService,
    private router : Router,
     matchingService:MatchingService,
    private cartService: CartService){

      activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        articleService.getArticleById(params['id']).subscribe(serverArticle => {
          this.article = serverArticle;

          itemService.getItemById(this.article.id_modele).subscribe(serverItem => {
            this.ItemsObservable = serverItem;
          });
         });
        matchingService.getMatchById(params['id']).subscribe(serverArticle => {
          this.articleMatch= serverArticle;
         });
        }
    })
  }
  addToCart(){
    this.cartService.addToCart(this.article);
    this.article.prix = this.ItemsObservable.prix;
    this.router.navigateByUrl('/cart-page');
  }
  procedeToBuy(){
    this.article.prix = this.ItemsObservable.prix;
    this.router.navigateByUrl(`/payment/${this.article.prix}?item=1`);
  }

  }
