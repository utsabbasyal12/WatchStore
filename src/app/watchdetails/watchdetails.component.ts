import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WatchstoreService } from '../watchstore.service';
import { Watchstore } from '../watchstore';

@Component({
  selector: 'app-watchdetails',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="watchStore?.photo"
        alt="{{ watchStore?.name }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ watchStore?.name }}</h2>
        <p class="listing-location">
          {{ watchStore?.description }}
        </p>
        <p class="listing-location">
          SKU:
          {{ watchStore?.sku }}
        </p>
        <p class="listing-location">
          Category:
          {{ watchStore?.category }}
        </p>
        <p class="listing-location">
          Available Unit:
          {{ watchStore?.availableUnits }}
        </p>
      </section>
    </article>
  `,
  styleUrls: ['./watchdetails.component.css'],
})
export class WatchdetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  watchService = inject(WatchstoreService);
  watchStore: Watchstore | undefined;

  constructor() {
    const watchId = parseInt(this.route.snapshot.params['id'], 10);
    this.watchService.getWatchDetailsById(watchId).then((watchStore) => {
      this.watchStore = watchStore;
    });
  }
}
