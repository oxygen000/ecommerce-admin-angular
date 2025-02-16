import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  reports = [
    {
      id: 1,
      title: 'Sales Report',
      date: new Date(),
      status: 'Completed',
      description: 'Monthly sales report covering revenue and expenses.'
    },
    {
      id: 2,
      title: 'Inventory Check',
      date: new Date(),
      status: 'Pending',
      description: 'A review of the current stock levels in the warehouse.'
    },
    {
      id: 3,
      title: 'System Audit',
      date: new Date(),
      status: 'Failed',
      description: 'Security and compliance audit for system vulnerabilities.'
    },
    {
      id: 4,
      title: 'Marketing Analysis',
      date: new Date(),
      status: 'Completed',
      description: 'Analysis of recent marketing campaigns and engagement.'
    }
  ];

  getStatusClass(status: string) {
    return {
      'completed': status === 'Completed',
      'pending': status === 'Pending',
      'failed': status === 'Failed'
    };
  }
}
