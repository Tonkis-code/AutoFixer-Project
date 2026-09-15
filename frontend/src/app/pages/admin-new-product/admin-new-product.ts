import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehicleService } from '../../services/vehicle';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-admin-new-product',
  styleUrl: './admin-new-product.css',
  templateUrl: './admin-new-product.html',
})
export class AdminNewProduct {
  newVehicle = {
    name: '',
    description: '',
    sku: '',
    imageUrl: '',
    price: 0,
    manufacturer: '',
    vehicleClass: '',
  };

  private vehicleService = inject(VehicleService);
  private router = inject(Router);
  submit() {
    this.vehicleService.createVehicle(this.newVehicle).subscribe(() => {
      this.router.navigate(['/admin/products']);
    });
  }
}
