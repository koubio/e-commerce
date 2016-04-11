import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ProductService} from './product.service';

describe('ProductService', () => {

  beforeEachProviders(() => [ProductService]);

  it('should get all products', inject([ProductService], (productService:ProductService) => {
    productService.getAll().then(products => expect(products.length).toBe(3));
  }));

  it('should get one product', inject([ProductService], (productService:ProductService) => {
    productService.get(1).then(product => expect(product.id).toBe(1));
  }));

});
