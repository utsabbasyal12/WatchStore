import { Injectable } from '@angular/core';
import { Watchstore } from './watchstore';

@Injectable({
  providedIn: 'root',
})
export class WatchstoreService {
  url = ' http://localhost:3000/locations';

  async getAllWatch(): Promise<Watchstore[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getWatchDetailsById(id: number): Promise<Watchstore | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  constructor() {}
}
