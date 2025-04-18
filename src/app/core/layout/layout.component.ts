import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule, 
    SidebarComponent, 
    HeaderComponent,
    MatDialogModule,
    MatButtonModule
  ],
  template: `
    <div class="layout">
      <aside class="sidebar">
        <app-sidebar #sidebar></app-sidebar>
      </aside>
      <div class="main-content">
        <header class="header">
          <app-header 
            [isClosed]="sidebar.isClosed"
            [isSidebarClosed]="sidebar.isClosed"
            (toggleSidebarEvent)="sidebar.toggleSidebar()">
          </app-header>
        </header>

        <main class="content">
          <router-outlet></router-outlet> 
        </main>
      </div>
    </div>
  `,
})
export class LayoutComponent {
 
}
