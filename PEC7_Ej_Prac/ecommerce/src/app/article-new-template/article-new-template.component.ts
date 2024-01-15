import { Component } from '@angular/core';
import { Article } from './../article-item/model/article';
import { NgForm } from '@angular/forms';
import { ArticleServiceService } from './../article-service.service';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {
  
  public submitedForm:boolean = false;
  public newArticle!:Article;
  
  constructor(private articleService: ArticleServiceService) {  }

  crearArticulo(articuloForm: NgForm) {
    if (articuloForm.invalid) {
      this.submitedForm = true;
    } else {
      this.newArticle = articuloForm.value.articulo;

      if (!this.newArticle.isOnSale) {
        this.newArticle.isOnSale = false;
      }

      this.articleService.createArticle(this.newArticle).subscribe(
        createdArticle => {
          console.log('Artículo creado', createdArticle);
        },
        error => {
          console.error('Error al crear el artículo:', error);
        }
      );
    }
  }
}