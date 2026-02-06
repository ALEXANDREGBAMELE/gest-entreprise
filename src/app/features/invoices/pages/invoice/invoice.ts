import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface InvoiceData {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
}

@Component({
  selector: 'app-invoice',
  imports: [CommonModule],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css',
})
export class Invoice {

  loading = signal(true);

  invoices: InvoiceData[] = [
    { id: '#001', customer: 'Alexandre', date: '2026-02-01', amount: 450, status: 'Paid' },
    { id: '#002', customer: 'Marie', date: '2026-02-02', amount: 200, status: 'Pending' },
    { id: '#003', customer: 'John Doe', date: '2026-02-03', amount: 600, status: 'Overdue' },
  ];

  constructor() {
    // Simulate API loading
    setTimeout(() => this.loading.set(false), 1000);
  }

  formatStatus(status: string) {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return '';
    }
  }

  // Exemple action
  payInvoice(invoice: InvoiceData) {
    console.log('Pay invoice', invoice.id);
  }

}
