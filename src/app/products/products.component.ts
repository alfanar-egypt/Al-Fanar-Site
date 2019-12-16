import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import AOS from 'aos';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Products

  constructor(private productsService: ProductsService) { }
  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(Products => this.Products = Products);
  }
  
  ngOnInit() {
    this.getProducts()
    AOS.init();
  }
}
