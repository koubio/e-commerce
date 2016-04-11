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
import {ProductListComponent} from './product-list.component';
import {Product, ProductService} from './product.service';

class MockProductService {
  getAll() { return Promise.resolve([new Product(1, 'one')]); }
}

describe('ProductListComponent', () => {

  beforeEachProviders(() => [
    provide(ProductService, {useClass: MockProductService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(ProductListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
