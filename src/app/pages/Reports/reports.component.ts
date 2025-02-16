import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  reports: any[] = [];

  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.reports = this.reportsService.getReports();
  }
}
