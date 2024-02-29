import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article!: Article;

  constructor(private articleService: ArticlesService,
              private router: Router){}

  onViewArticle(){
    this.router.navigateByUrl(`articles/${this.article.id_article}`);
  }
}
