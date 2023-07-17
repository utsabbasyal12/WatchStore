import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Watchstore } from '../watchstore';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-watchstore',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="watchstore.photo"
        alt="{{ watchstore.name }}"
      />
      <h2 class="listing-heading">{{ watchstore.name }}</h2>
      <a [routerLink]="['/watchdetails', watchstore.id]">View Product</a>
    </section>
  `,
  styleUrls: ['./watchstore.component.css'],
})
export class WatchstoreComponent {
  @Input() watchstore!: Watchstore;
}
