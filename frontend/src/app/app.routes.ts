import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SearchResults } from './pages/search-results/search-results';
import { VehicleDetail } from './pages/vehicle-detail/vehicle-detail';
import { AdminProducts } from './pages/admin-products/admin-products';
import { AdminNewProduct } from './pages/admin-new-product/admin-new-product';

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
  {
    path: 'admin/products',
    component: AdminProducts,
  },
  {
    path: 'admin/products/new',
    component: AdminNewProduct,
  },
];
