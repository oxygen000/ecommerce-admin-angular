import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isSidebarClosed: boolean = false;
  @Input() isClosed: boolean = false;
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  user = {
    name: 'Ahmed Hassan',
  };

  ngOnInit() {
    this.handleSidebarByScreenSize();
  }

  handleSidebarByScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024 && this.isSidebarClosed) {
      this.toggleSidebarEvent.emit();
    } else if (screenWidth <= 767 && !this.isSidebarClosed) {
      this.toggleSidebarEvent.emit();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.handleSidebarByScreenSize();
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
