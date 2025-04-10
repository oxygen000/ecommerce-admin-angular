import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    NgxChartsModule,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  stats = [
    {
      icon: `<i class="fa fa-users"></i>`,
      title: 'Total Sales',
      value: '$50,000',
    },
    {
      icon: `<i class="fa fa-shopping-cart"></i>`,
      title: 'Orders',
      value: '1,200',
    },
    {
      icon: `<i class="fa fa-users"></i>`,
      title: 'Customers',
      value: '5,400',
    },
  ];

  chartData = [
    { name: 'Product A', value: 5000 },
    { name: 'Product B', value: 7200 },
    { name: 'Product C', value: 3100 },
  ];

  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  exportData = [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      position: 'Developer',
      salary: '$3,000',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      position: 'Designer',
      salary: '$3,500',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      age: 45,
      position: 'Manager',
      salary: '$5,000',
    },
    { id: 4, name: 'Emily Davis', age: 29, position: 'HR', salary: '$3,200' },
  ];

  isSettingsOpen: boolean = false;
  isDarkMode: boolean = false;
  selectedLanguage: string = 'English';
  viewMode: string = 'table';

  toggleSettings(): void {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  changeLanguage(language: string): void {
    this.selectedLanguage = language;
  }

  changeViewMode(mode: string): void {
    this.viewMode = mode;
  }

  downloadExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dashboard Data');
    XLSX.writeFile(workbook, 'Dashboard_Data.xlsx');
  }
}
