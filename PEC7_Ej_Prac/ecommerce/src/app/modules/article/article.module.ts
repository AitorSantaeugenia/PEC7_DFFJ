import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArticleRoutingModule } from './article-routing.module';


import { ArticleItemComponent } from './../../components/article-item/article-item.component';
import { ArticleNewReactiveComponent } from './../../components/article-new-reactive/article-new-reactive.component';
import { ArticleListComponent } from './../../components/article-list/article-list.component';
import { ArticleDetailComponent } from './../../components/article-detail/article-detail.component';
import { DefaultImagePipe } from './../../pipes/default-image.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticleRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArticleDetailComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    DefaultImagePipe
  ]
})

export class ArticleModule { }