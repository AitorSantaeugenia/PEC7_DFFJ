import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './../../components/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './../../components/article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './../../components/article-detail/article-detail.component';

import {LoggedGuard} from "./../../guards/logged.guard";
import {ArticleResolver} from "./../../resolvers/article.resolver";

const routes: Routes = [
  { path: 'list', component: ArticleListComponent },
  { path: 'create', component: ArticleNewReactiveComponent,
    canActivate: [LoggedGuard],
  },
  { path: ':id', component: ArticleDetailComponent,
    canActivate: [LoggedGuard],
    resolve: { article: ArticleResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }