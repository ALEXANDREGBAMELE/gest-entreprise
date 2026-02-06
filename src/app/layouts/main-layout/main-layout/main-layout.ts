import { Component, computed, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule,NgStyle, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

import { Sidebar } from '../../components/sidebar/sidebar';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Breadcrumb } from '../../components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    Sidebar,
    Header,
    Footer,
    Breadcrumb,
    NgStyle,
    CommonModule,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

  private platformId = inject(PLATFORM_ID);

  /** signals */
  isMobile = signal(false);
  sidebarOpen = signal(true);          // desktop
  mobileSidebarOpen = signal(false);   // mobile

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const mediaQuery = window.matchMedia('(max-width: 768px)');

      this.isMobile.set(mediaQuery.matches);
      this.sidebarOpen.set(!mediaQuery.matches);

      mediaQuery.addEventListener('change', (e) => {
        this.isMobile.set(e.matches);

        if (e.matches) {
          // mobile
          this.sidebarOpen.set(false);
          this.mobileSidebarOpen.set(false);
        } else {
          // desktop
          this.sidebarOpen.set(true);
        }
      });
    }
  }

  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }

  toggleMobileSidebar() {
    this.mobileSidebarOpen.update(v => !v);
  }

  sidebarWidth = computed(() =>
    this.sidebarOpen()
      ? 'var(--sidebar-width-full)'
      : 'var(--sidebar-width-collapsed)'
  );

  onNavigate() {
  if (this.isMobile()) {
    this.mobileSidebarOpen.set(false);
  }
}
}
