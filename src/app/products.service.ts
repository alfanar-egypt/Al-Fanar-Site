import { Injectable } from '@angular/core';
import { Products } from './Products';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}
  getProducts() {
    return of(Products);
  }
  getProduct(Name: string): Observable<any> {
    return of(Products.find(Product => Product.Name === Name));
  }
}
