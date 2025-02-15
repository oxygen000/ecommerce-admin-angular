import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ReportsComponent } from './pages/Reports/reports.component';
import { LayoutComponent } from './core/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { importProvidersFrom } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HeaderComponent },
      { path: '', component: SidebarComponent },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'Products', component: ProductsComponent },
      { path: 'Orders', component: OrdersComponent },
      { path: 'Users', component: UsersComponent },
      { path: 'Reports', component: ReportsComponent },
      { path: 'Settings', component: SettingsComponent }
    ]
  }
  
];
export const appConfig = [
  provideRouter(routes),
  importProvidersFrom(BrowserAnimationsModule, MatDialogModule) // استيراد `MatDialogModule`
];
