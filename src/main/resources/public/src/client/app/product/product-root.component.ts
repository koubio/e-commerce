import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductService} from './product.service';

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [ProductService],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: '/', name: 'ProductList', component: ProductListComponent, useAsDefault: true},
  {path: '/:id', name: 'ProductDetail', component: ProductDetailComponent}
])
export class ProductRoot {
  constructor() {}
}
