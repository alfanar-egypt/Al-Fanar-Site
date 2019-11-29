import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  Products

  constructor(private productsService: ProductsService) { }
  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(Products => this.Products = Products);
  }

  ngOnInit() {
    this.getProducts()
  }
}
