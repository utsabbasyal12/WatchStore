import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchstoreComponent } from '../watchstore/watchstore.component';
import { Watchstore } from '../watchstore';
import { WatchstoreService } from '../watchstore.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WatchstoreComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by Category" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResult(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-watchstore
        *ngFor="let watchStore of filteredWatchList"
        [watchstore]="watchStore"
      >
      </app-watchstore>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  watchList: Watchstore[] = [];
  watchstoreService: WatchstoreService = inject(WatchstoreService);
  filteredWatchList: Watchstore[] = [];

  constructor() {
    this.watchstoreService.getAllWatch().then((watchList: Watchstore[]) => {
      this.watchList = watchList;
      this.filteredWatchList = watchList;
    });
  }
  filterResult(text: string) {
    if (!text) {
      this.filteredWatchList = this.watchList;
    }
    this.filteredWatchList = this.watchList.filter(
      (watchStore) =>
        watchStore?.category.toLowerCase().includes(text.toLowerCase()) ||
        watchStore?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
