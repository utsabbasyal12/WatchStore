import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WatchdetailsComponent } from './watchdetails/watchdetails.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: WatchdetailsComponent,
    title: 'Watch Details',
  },
];

export default routeConfig;
