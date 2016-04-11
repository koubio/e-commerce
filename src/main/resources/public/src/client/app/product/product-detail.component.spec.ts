import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ProductDetailComponent} from './product-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Product, ProductService} from './product.service';

class MockProductService {
  get() { return Promise.resolve(new Product(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('ProductDetailComponent', () => {

  beforeEachProviders(() => [
    provide(ProductService, {useClass: MockProductService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(ProductDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
