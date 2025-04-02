import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
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
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' }, 
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
  importProvidersFrom(BrowserAnimationsModule, MatDialogModule)
];
