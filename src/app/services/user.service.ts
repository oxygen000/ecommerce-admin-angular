import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = [
    { id: 1, name: 'Ahmed Mohamed', email: 'ahmed@example.com', phone: '01012345678' },
    { id: 2, name: 'Sarah Khaled', email: 'sarah@example.com', phone: '01198765432' },
    { id: 3, name: 'Khaled Ali', email: 'khaled@example.com', phone: '01234567890' },
    { id: 4, name: 'Mariam Youssef', email: 'mariam@example.com', phone: '01567890123' }
  ];

  getUsers() {
    return this.users; // Return mock data
  }
}
