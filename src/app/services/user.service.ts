import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'أحمد', email: 'ahmed@example.com', role: 'admin', createdAt: new Date() },
    { id: 2, name: 'محمد', email: 'mohamed@example.com', role: 'user', createdAt: new Date() }
  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
