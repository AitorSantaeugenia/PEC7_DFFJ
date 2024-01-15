import { NgModule } from '@angular/core';
import { ArticleListComponent } from './article-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ArticleListComponent }
];

@NgModule({
  declarations: [ArticleListComponent],
  imports: [RouterModule.forChild(routes)],
})
export class AriticleListModule { }