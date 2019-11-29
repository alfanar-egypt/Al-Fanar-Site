import { Injectable } from '@angular/core';
import { Products } from './Products';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  getProducts() {
    return of(Products);
  }
}
