import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  Product: any;

  constructor(private route: ActivatedRoute,
    private productsService: ProductsService, ) { }

  ngOnInit() {
    this.getProduct()
  }
  getProduct(){
    const Name = this.route.snapshot.paramMap.get('Name');
    this.productsService.getProduct(Name)
      .subscribe(Product => this.Product = Product);
  }
}
