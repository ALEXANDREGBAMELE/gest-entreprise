import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface ICustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
loading = signal(true);

  customers: ICustomer[] = [
  { id: '#C001', name: 'Alexandre', email: 'alex@example.com', phone: '+225 0700000001', status: 'Active' },
  { id: '#C002', name: 'Marie', email: 'marie@example.com', phone: '+225 0700000002', status: 'Active' },
  { id: '#C003', name: 'John Doe', email: 'john@example.com', phone: '+225 0700000003', status: 'Inactive' },
  { id: '#C004', name: 'Sophie', email: 'sophie@example.com', phone: '+225 0700000004', status: 'Active' },
  { id: '#C005', name: 'Paul', email: 'paul@example.com', phone: '+225 0700000005', status: 'Inactive' },
  { id: '#C006', name: 'Emilie', email: 'emilie@example.com', phone: '+225 0700000006', status: 'Active' },
  { id: '#C007', name: 'Lucas', email: 'lucas@example.com', phone: '+225 0700000007', status: 'Active' },
  { id: '#C008', name: 'Chloe', email: 'chloe@example.com', phone: '+225 0700000008', status: 'Inactive' },
  { id: '#C009', name: 'Maxime', email: 'maxime@example.com', phone: '+225 0700000009', status: 'Active' },
  { id: '#C010', name: 'Isabelle', email: 'isabelle@example.com', phone: '+225 0700000010', status: 'Active' },
  { id: '#C011', name: 'Thomas', email: 'thomas@example.com', phone: '+225 0700000011', status: 'Inactive' },
  { id: '#C012', name: 'Laura', email: 'laura@example.com', phone: '+225 0700000012', status: 'Active' },
  { id: '#C013', name: 'Antoine', email: 'antoine@example.com', phone: '+225 0700000013', status: 'Active' },
  { id: '#C014', name: 'Camille', email: 'camille@example.com', phone: '+225 0700000014', status: 'Inactive' },
  { id: '#C015', name: 'Nicolas', email: 'nicolas@example.com', phone: '+225 0700000015', status: 'Active' },
  { id: '#C016', name: 'Juliette', email: 'juliette@example.com', phone: '+225 0700000016', status: 'Active' },
  { id: '#C017', name: 'Adrien', email: 'adrien@example.com', phone: '+225 0700000017', status: 'Inactive' },
  { id: '#C018', name: 'Samantha', email: 'samantha@example.com', phone: '+225 0700000018', status: 'Active' },
  { id: '#C019', name: 'Romain', email: 'romain@example.com', phone: '+225 0700000019', status: 'Active' },
  { id: '#C020', name: 'Marine', email: 'marine@example.com', phone: '+225 0700000020', status: 'Inactive' },
  { id: '#C021', name: 'Julien', email: 'julien@example.com', phone: '+225 0700000021', status: 'Active' },
  { id: '#C022', name: 'Claire', email: 'claire@example.com', phone: '+225 0700000022', status: 'Active' },
  { id: '#C023', name: 'Benoit', email: 'benoit@example.com', phone: '+225 0700000023', status: 'Inactive' },
  { id: '#C024', name: 'Valérie', email: 'valerie@example.com', phone: '+225 0700000024', status: 'Active' },
  { id: '#C025', name: 'Damien', email: 'damien@example.com', phone: '+225 0700000025', status: 'Active' },
  { id: '#C026', name: 'Fanny', email: 'fanny@example.com', phone: '+225 0700000026', status: 'Inactive' },
  { id: '#C027', name: 'Hugo', email: 'hugo@example.com', phone: '+225 0700000027', status: 'Active' },
  { id: '#C028', name: 'Céline', email: 'celine@example.com', phone: '+225 0700000028', status: 'Active' },
  { id: '#C029', name: 'Vincent', email: 'vincent@example.com', phone: '+225 0700000029', status: 'Inactive' },
  { id: '#C030', name: 'Audrey', email: 'audrey@example.com', phone: '+225 0700000030', status: 'Active' }
];
  constructor() {
    // Simulate API loading
    setTimeout(() => this.loading.set(false), 1000);
  }

  formatStatus(status: string) {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      default: return '';
    }
  }

  editCustomer(customer: ICustomer) {
    console.log('Edit customer', customer.id);
  }

  deleteCustomer(customer: ICustomer) {
    console.log('Delete customer', customer.id);
  }
}
