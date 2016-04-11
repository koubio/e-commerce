import {Injectable} from 'angular2/core';

export class Product {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class ProductService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new Product(1, 'one'),
  new Product(2, 'two'),
  new Product(3, 'three')
];

let promise = Promise.resolve(mock);
