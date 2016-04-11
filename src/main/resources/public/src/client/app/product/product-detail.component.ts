import {Component, OnInit} from 'angular2/core';
import {Product, ProductService} from './product.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/product/product-detail.component.html',
  styleUrls: ['app/product/product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, CanDeactivate {

  product: Product;
  editName: string;

  constructor(
    private _service: ProductService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    let id = Number(this._routeParams.get('id'));
    this._service.get(id).then(product => {
      if (product) {
        this.editName = product.name;
        this.product = product;
      } else {
        this.gotoList();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.product || this.product.name === this.editName) {
      return true;
    }

    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.editName = this.product.name;
    this.gotoList();
  }

  save() {
    this.product.name = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['ProductList']);
  }
}
