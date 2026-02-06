import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

const MENU = [
  { label: 'Dashboard', route: '/dashboard', icon: 'dashboard-line' },
  { label: 'Factures', route: '/invoices', icon: 'file-list-3-line' },
  { label: 'Clients', route: '/customers', icon: 'group-line' }
];


@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive,NgFor, NgIf],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone: true
})
export class Sidebar {
  @Input() collapsed = false;
  @Output() navigate = new EventEmitter<void>();
  menu = MENU;

  onInit() {
    console.log('Sidebar initialized : ', this.menu);
  }

  onNavigate() {
    this.navigate.emit(); // prévient le parent pour fermer le drawer mobile
  }
}
