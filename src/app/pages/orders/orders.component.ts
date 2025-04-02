import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  imports: [CommonModule,FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  searchTerm: string = '';
  selectedOrder: any = null;

  orders = [
    { id: 101, customer: 'Ahmed Ali', date: '2024-02-16', status: 'Pending', items: ['T-Shirt', 'Jeans'] },
    { id: 102, customer: 'Fatima Hassan', date: '2024-02-15', status: 'Completed', items: ['Dress', 'Scarf'] },
    { id: 103, customer: 'Omar Khaled', date: '2024-02-14', status: 'Canceled', items: ['Jacket', 'Sweater'] },
    { id: 104, customer: 'Layla Mohamed', date: '2024-02-13', status: 'Pending', items: ['Skirt', 'Blouse'] },
    { id: 105, customer: 'Youssef Saeed', date: '2024-02-12', status: 'Completed', items: ['Suit', 'Tie'] },
    { id: 106, customer: 'Mariam Adel', date: '2024-02-11', status: 'Processing', items: ['Coat', 'Gloves'] },
    { id: 107, customer: 'Hassan Nabil', date: '2024-02-10', status: 'Pending', items: ['Hoodie', 'Shorts'] },
    { id: 108, customer: 'Salma Tarek', date: '2024-02-09', status: 'Completed', items: ['Sweatshirt', 'Leggings'] },
    { id: 109, customer: 'Khaled Ibrahim', date: '2024-02-08', status: 'Canceled', items: ['Shoes', 'Socks'] },
    { id: 110, customer: 'Nour Ahmed', date: '2024-02-07', status: 'Processing', items: ['Blazer', 'Hat'] },
    { id: 111, customer: 'Karim Mostafa', date: '2024-02-06', status: 'Pending', items: ['Tracksuit', 'Cap'] },
    { id: 112, customer: 'Rania Sami', date: '2024-02-05', status: 'Completed', items: ['Pajamas', 'Slippers'] },
    { id: 113, customer: 'Tamer Hussein', date: '2024-02-04', status: 'Processing', items: ['Raincoat', 'Boots'] },
];
statusOptions = ['Pending', 'Processing', 'Completed', 'Canceled'];

  filteredOrders() {
    return this.orders.filter(order =>
      order.customer.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      order.id.toString().includes(this.searchTerm)
    );
  }

  selectOrder(order: any) {
    this.selectedOrder = { ...order }; 
  }
  updateOrder() {
    let index = this.orders.findIndex(o => o.id === this.selectedOrder.id);
    if (index !== -1) {
      this.orders[index] = { ...this.selectedOrder };
      alert('Order updated successfully!');
    }
    this.closeModal();
  }

  closeModal() {
    this.selectedOrder = null;
  }

  getStatusClass(status: string) {
    return {
      'pending': status === 'Pending',
      'completed': status === 'Completed',
      'canceled': status === 'Canceled'
    };
  }
}