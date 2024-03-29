import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { Article } from '../../models/article/article';
import { ArticleQuantityChange } from '../../models/article/article-quantity-change';
import { ArticleServiceService } from '../../services/article-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  @Input() public article!: Article;
  @Output() private quantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter();

  constructor(private articleService: ArticleServiceService, private cdRef: ChangeDetectorRef, private router: Router) {}

  incrementInCart() {
    this.quantityChange.emit({ article: this.article, changeInQuantity: 1 });

    this.articleService.changeQuantity(this.article.id, 1).subscribe(
      updatedArticle => {
        if (updatedArticle) {
          this.cdRef.detectChanges();
          console.log('Cantidad en el carrito actualizada:', updatedArticle);
        } else {
          console.error('Error al actualizar la cantidad en el carrito.');
        }
      },
      error => {
        console.error('Error en la solicitud PATCH:', error);
      }
    );
  }

  decrementInCart() {
    if (this.article.quantityInCart > 0) {
      const newQuantity = this.article.quantityInCart - 1;
  
      if (newQuantity >= 0) {
        this.quantityChange.emit({ article: this.article, changeInQuantity: -1 });
  
        this.articleService.changeQuantity(this.article.id, -1).subscribe(
          updatedArticle => {
            if (updatedArticle) {
              this.cdRef.detectChanges();
              console.log('Cantidad en el carrito actualizada:', updatedArticle);
            } else {
              console.error('Error al actualizar la cantidad en el carrito.');
            }
          },
          error => {
            console.error('Error en la solicitud PATCH:', error);
          }
        );
      }
    }
  }

  navigateToArticleDetail(articleId: number): void {
    this.router.navigate(['/article', articleId]);
  }
}