import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SearchResults } from './pages/search-results/search-results';
import { VehicleDetail } from './pages/vehicle-detail/vehicle-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'search',
    component: SearchResults,
  },
  {
    path: 'vehicles/:slug',
    component: VehicleDetail,
  },
];
