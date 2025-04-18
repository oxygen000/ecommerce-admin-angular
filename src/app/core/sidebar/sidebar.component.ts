import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterModule],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isClosed = false;

  toggleSidebar() {
    this.isClosed = !this.isClosed;
  }
}
