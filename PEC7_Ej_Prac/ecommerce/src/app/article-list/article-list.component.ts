import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from './../article-service.service';
import { Article } from "./../article-item/model/article";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {

  public articles!: Observable<Article[]>;
  public filteredArticles: Article[] = [];
  public searchQuery: string = '';

  constructor(private articleService: ArticleServiceService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.applyFilter();
  }

  applyFilter() {
    this.articles.subscribe((allArticles: Article[]) => {
      if (!this.searchQuery) {
        this.filteredArticles = allArticles;
      } else {
        this.filteredArticles = allArticles.filter(article =>
          article.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    });
  }

  onSearchQueryChange() {
    this.applyFilter();
  }
}