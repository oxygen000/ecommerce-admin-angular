import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,NgxChartsModule],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  stats = [
    { icon: '📊', title: 'Total Sales', value: '$50,000' },
    { icon: '🛒', title: 'Orders', value: '1,200' },
    { icon: '👥', title: 'Customers', value: '5,400' }
  ];


}
