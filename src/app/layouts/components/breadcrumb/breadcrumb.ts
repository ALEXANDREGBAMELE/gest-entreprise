import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
})
export class Breadcrumb {
private router = inject(Router);

  breadcrumbs = computed(() =>
    this.router.url
      .split('/')
      .filter(Boolean)
      .map(segment => segment)
  );
}
