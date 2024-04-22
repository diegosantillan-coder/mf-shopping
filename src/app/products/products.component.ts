import { Component } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { IProductCard } from '../interfaces/product-card.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private _animeService: AnimeService) {}
  products: IProductCard[] = [];

  ngOnInit(): void {
    this._animeService.getAnimes().subscribe((response) => {
      this.products = response;
    });
  }
}
