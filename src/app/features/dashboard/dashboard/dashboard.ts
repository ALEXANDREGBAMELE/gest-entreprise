import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
stats = [
{ title: 'Chiffre d\'affaires', value: '12 450 000 FCFA', icon: 'ri-money-dollar-circle-line', trend: '+12%' },
{ title: 'Clients', value: '1 284', icon: 'ri-user-3-line', trend: '+4%' },
{ title: 'Factures', value: '342', icon: 'ri-file-list-3-line', trend: '-2%' },
{ title: 'Tâches', value: '18', icon: 'ri-task-line', trend: '+6%' }
];
}
