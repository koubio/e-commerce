import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {ECommerceApp} from '../app/e-commerce';

beforeEachProviders(() => [ECommerceApp]);

describe('App: ECommerce', () => {
  it('should have the `defaultMeaning` as 42', inject([ECommerceApp], (app: ECommerceApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([ECommerceApp], (app: ECommerceApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

