import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";

import {ArticleNewReactiveComponent} from "./article-new-reactive/article-new-reactive.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";
import {ArticleListComponent} from "./article-list/article-list.component";
import {LoggedGuard} from "./guards/logged.guard";
import {ArticleResolver} from "./resolvers/article.resolver";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'article/list', component: ArticleListComponent},
  {
    path: 'article/create',
    component: ArticleNewReactiveComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'article/:id',
    component: ArticleDetailComponent,
    resolve: {
      article: ArticleResolver
    }
  },
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }