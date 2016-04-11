import {Component, OnInit} from 'angular2/core';
import {Product, ProductService} from './product.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  templateUrl: 'app/product/product-list.component.html',
  styleUrls: ['app/product/product-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(
    private _service: ProductService) {}
  ngOnInit() {
    this._service.getAll().then(products => this.products = products);
  }
}
