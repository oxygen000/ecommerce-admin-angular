import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  newProduct: Product = { id: 0, name: '', price: 0, category: '', stock: 0 };

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = [
      { id: 1, name: 'T-Shirt', price: 20, category: 'Men', stock: 15 },
  { id: 2, name: 'Jeans', price: 40, category: 'Men', stock: 10 },
  { id: 3, name: 'Jacket', price: 60, category: 'Men', stock: 5 },
  { id: 4, name: 'Dress', price: 50, category: 'Women', stock: 8 },
  { id: 5, name: 'Skirt', price: 30, category: 'Women', stock: 12 },
  { id: 6, name: 'Blouse', price: 35, category: 'Women', stock: 9 },
  { id: 7, name: 'Kids Jacket', price: 25, category: 'Kids', stock: 14 },
  { id: 8, name: 'Kids T-Shirt', price: 15, category: 'Kids', stock: 20 },
  { id: 9, name: 'Sweatshirt', price: 45, category: 'Unisex', stock: 7 },
  { id: 10, name: 'Hoodie', price: 55, category: 'Unisex', stock: 6 },
    ];
  }

  addProduct(): void {
    const newId = this.products.length ? this.products[this.products.length - 1].id + 1 : 1;
    this.newProduct.id = newId;
    
    this.products.push({ ...this.newProduct });
    this.resetForm();
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }

  private resetForm(): void {
    this.newProduct = { id: 0, name: '', price: 0, category: '', stock: 0 };
  }
}
