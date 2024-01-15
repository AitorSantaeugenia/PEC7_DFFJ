import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  ARTICLE_TOKEN = 'article-token';

  saveToken(token: string): void {
    localStorage.setItem(this.ARTICLE_TOKEN, token);
  }

  get token(): string | null {
    return localStorage.getItem(this.ARTICLE_TOKEN);
  }

  get isLogged(): boolean {
    return this.token !== null;
  }

  deleteToken(): void {
    localStorage.removeItem(this.ARTICLE_TOKEN);
  }
}