import { Component, inject, signal, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle';
import { Vehicle } from '../../models/vehicle';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-admin-products',
  styleUrl: './admin-products.css',
  templateUrl: './admin-products.html',
})
export class AdminProducts implements OnInit {
  private vehicleService = inject(VehicleService);

  vehicles = signal<Vehicle[]>([]);

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles.set(vehicles);
    });
  }
}
