import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: 'login', loadChildren: () => import('./components/user/login/login.module').then(m => m.LoginModule) },
  // {path: 'register', loadChildren: () => import('./components/user/register/register.module').then(m => m.RegisterModule) },
  // {path: 'article/list', loadChildren: () => import('./components/article-list/article-list.module').then(m => m.AriticleListModule) },
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  { path: 'article', loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }