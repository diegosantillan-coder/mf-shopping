import { Component, Input } from '@angular/core';
import { IProductCard } from '../interfaces/product-card.interface';
import PubSub from 'pubsub-js';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: IProductCard;

  // constructor(private _commonsLibService: CommonsLibService) {}

  clickCard(): void {
    PubSub.publish('products', this.product);
  }
}
