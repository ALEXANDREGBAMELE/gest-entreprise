import { Routes } from '@angular/router';
import {  MainLayout } from './layouts/main-layout/main-layout/main-layout';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { Invoice } from './features/invoices/pages/invoice/invoice';
import { Customer } from './features/customers/pages/customer/customer';
export const routes: Routes = [
    {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'invoices', component: Invoice },
      { path: 'customers', component: Customer }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
