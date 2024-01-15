import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../models/article/article";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {

  article: Article = this.activatedRoute.snapshot.data['article'];

  constructor(private activatedRoute: ActivatedRoute) {}

}