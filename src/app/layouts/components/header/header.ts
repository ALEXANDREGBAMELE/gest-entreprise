import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
@Input() sidebarOpen: boolean = true;
@Output() toggleSidebar = new EventEmitter<void>();        // desktop
@Output() toggleSidebarMobile = new EventEmitter<void>();  // mobile


  toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  ngOnInit() {
    console.log('sidebarOpen : ', this.sidebarOpen);
  }
}