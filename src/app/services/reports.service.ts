import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private reports = [
    { id: 1, title: 'Monthly Sales', date: '2024-02-01', status: 'Completed' },
    { id: 2, title: 'Customer Feedback', date: '2024-02-10', status: 'Pending' },
    { id: 3, title: 'Employee Performance', date: '2024-02-15', status: 'Completed' },
    { id: 4, title: 'Annual Revenue', date: '2024-02-20', status: 'In Progress' }
  ];

  getReports() {
    return this.reports;
  }
}
