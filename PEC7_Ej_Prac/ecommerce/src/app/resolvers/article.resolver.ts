import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ArticleServiceService} from "./../services/article-service.service";
import {map} from "rxjs/operators";
import { Article } from '../article-item/model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article> {

  constructor(private articleService: ArticleServiceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> {
    return this.articleService.getArticles().pipe(
      map((articles: Article[]) => articles.find(a => a.id === parseInt(route.params['id'], 10))!)
    );
  }
}