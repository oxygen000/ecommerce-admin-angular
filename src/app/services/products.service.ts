import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    { id: 1, name: 'Classic T-Shirt', price: 25, category: 'T-Shirts', stock: 30, size: 'M', color: 'White' },
    { id: 2, name: 'Denim Jeans', price: 50, category: 'Pants', stock: 20, size: 'L', color: 'Blue' },
    { id: 3, name: 'Hoodie', price: 60, category: 'Sweatshirts', stock: 15, size: 'XL', color: 'Black' },
    { id: 4, name: 'Formal Shirt', price: 45, category: 'Shirts', stock: 25, size: 'M', color: 'Light Blue' },
    { id: 5, name: 'Casual Sneakers', price: 80, category: 'Shoes', stock: 10, size: '42', color: 'Gray' }
  ];

  getProducts() {
    return this.products;
  }
}
