import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { Item } from '../models/item.model';
import { ArticlesService } from '../services/articles.service';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss'],
})
export class SingleItemComponent implements OnInit {
  item!: Item;
  articles!: Article[];
   PrixArticle!: Number;

  constructor(private itemService: ItemsService,private activatedRoute: ActivatedRoute,
    private articleService:ArticlesService) {
    let ObservableArticle = Observable<Article[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        itemService.getItemById(params['id']).subscribe(serverItem => {
          this.item = serverItem;
          this.PrixArticle = this.item.prix;
          articleService.getAllArticleBySearchTerm(params['id']).subscribe(serverArticle => {
            this.articles= serverArticle;
           });
         });
      }
    })
  }

  ngOnInit() {


  }
}
