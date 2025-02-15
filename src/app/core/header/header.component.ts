import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isSidebarClosed: boolean = false;

  user = {
    name: 'Ahmed Hassan',
    avatar: 'assets/user.jpg'
  };
}
