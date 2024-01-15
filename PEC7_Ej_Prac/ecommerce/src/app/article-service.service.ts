import { Injectable } from '@angular/core';
import {Article} from "./article-item/model/article";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ArticleServiceService {
  private apiUrl = '/api/articles';
  
  constructor(private http: HttpClient) {}

  getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable <Article | null | undefined> {
    const patchUrl = `${this.apiUrl}/${articleID}`;
    const requestBody = { changeInQuantity };

    return this.http.patch<Article>(patchUrl, requestBody);
  }

    createArticle(article: Article): Observable<any> {
      return this.http.post<Article>(this.apiUrl, article);
  }
}
