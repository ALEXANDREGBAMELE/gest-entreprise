import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Breadcrumb } from '../../components/breadcrumb/breadcrumb';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Sidebar, Header, Footer,Breadcrumb,NgIf,
    NgFor,
    NgStyle 
   ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
  standalone: true
})
export class MainLayout {
  // sidebarOpen = signal(false);

  // toggleSidebar() {
  //   this.sidebarOpen.update(v => !v);
  // }

  sidebarOpen = signal(true);          // desktop
  mobileSidebarOpen = signal(false);   // mobile

  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }

  toggleMobileSidebar() {
    this.mobileSidebarOpen.update(v => !v);
  }

  sidebarWidth = computed(() =>
    this.sidebarOpen() ? 'var(--sidebar-width-full)' : 'var(--sidebar-width-collapsed)'
  );
}
