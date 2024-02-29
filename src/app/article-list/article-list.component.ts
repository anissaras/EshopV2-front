import { Component } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  articles!: Article[];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    //this.articles = this.articlesService.getAllArticles();
  }
}
