import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IMenuItem, MENU } from '../../menu';
import { SidebarSubmenu } from '../sidebar-submenu/sidebar-submenu';





@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule, SidebarSubmenu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone: true
})
export class Sidebar {
  @Input() collapsed = false;
  @Output() navigate = new EventEmitter<void>();
  menu: IMenuItem[] = MENU;

  onInit() {
    console.log('Sidebar initialized : ', this.menu);
  }
 toggle(item: IMenuItem) {
    item.open = !item.open;
  }

  onNavigate() {
    this.navigate.emit(); // prévient le parent pour fermer le drawer mobile
  }
}
