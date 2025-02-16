import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders = [
    { id: 101, customer: 'John Doe', date: '2024-02-01', total: 150.75, status: 'Shipped' },
    { id: 102, customer: 'Jane Smith', date: '2024-02-10', total: 89.99, status: 'Pending' },
    { id: 103, customer: 'Michael Brown', date: '2024-02-15', total: 220.50, status: 'Delivered' },
    { id: 104, customer: 'Emily Johnson', date: '2024-02-20', total: 45.00, status: 'Cancelled' }
  ];

  getOrders() {
    return this.orders;
  }
}
