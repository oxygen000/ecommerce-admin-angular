import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchQuery: string = '';
  showAddUserModal: boolean = false;

  newUser = { id: 0, name: '', email: '', phone: '' };

  constructor() {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.users = [
      { id: 1, name: 'Ali Ahmed', email: 'ali@example.com', phone: '123456789' },
      { id: 2, name: 'Sara Mohamed', email: 'sara@example.com', phone: '987654321' },
      { id: 3, name: 'Omar Khaled', email: 'omar@example.com', phone: '555667788' },
    ];
    this.filteredUsers = [...this.users];
  }

  addUser(event?: Event): void {
    if (event) {
      event.preventDefault(); 
    }

    if (this.newUser.name.trim() && this.newUser.email.trim() && this.newUser.phone.trim()) {
      this.newUser.id = this.users.length ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
      this.users.push({ ...this.newUser });
      this.filteredUsers = [...this.users]; 

      this.newUser = { id: 0, name: '', email: '', phone: '' };
      this.closeAddUserModal();
    }
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.phone.includes(this.searchQuery)
    );
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
    this.filteredUsers = [...this.users];
  }

  openAddUserModal() {
    this.showAddUserModal = true;
    setTimeout(() => {
      document.querySelector('.modal')?.classList.add('active');
    }, 10); 
  }
  
  closeAddUserModal() {
    document.querySelector('.modal')?.classList.remove('active');
    setTimeout(() => {
      this.showAddUserModal = false;
    }, 300); 
  }
}