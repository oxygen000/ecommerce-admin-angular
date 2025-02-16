import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers(); // جلب البيانات من الخدمة
  }
}
