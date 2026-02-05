import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

const MENU = [
  { label: 'Dashboard', route: '/dashboard' },
  { label: 'Factures', route: '/invoices' },
  { label: 'Clients', route: '/customers' }
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
  menu = MENU;

  onInit() {
    console.log('Sidebar initialized : ', this.menu);
  }
}
