import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { VehicleService } from '../../services/vehicle';
import { Vehicle } from '../../models/vehicle';
import { VehicleCard } from '../../components/vehicle-card/vehicle-card';

@Component({
  imports: [DecimalPipe, VehicleCard],
  selector: 'app-vehicle-detail',
  styleUrl: './vehicle-detail.css',
  templateUrl: './vehicle-detail.html',
})
export class VehicleDetail {
  private route = inject(ActivatedRoute);
  private vehicleService = inject(VehicleService);

  vehicle = signal<Vehicle | null>(null);
  similarVehicles = signal<Vehicle[]>([]);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');

      if (!slug) return;

      this.vehicleService.getVehicleBySlug(slug).subscribe((vehicle) => {
        this.vehicle.set(vehicle);

        this.loadSimilarVehicles(vehicle);
      });
    });
  }

  private loadSimilarVehicles(currentVehicle: Vehicle) {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      const otherVehicles = vehicles.filter((vehicle) => vehicle.id !== currentVehicle.id);

      const sameClass = otherVehicles.filter(
        (vehicle) => vehicle.vehicleClass === currentVehicle.vehicleClass,
      );

      const differentClass = otherVehicles.filter(
        (vehicle) => vehicle.vehicleClass !== currentVehicle.vehicleClass,
      );

      this.similarVehicles.set([...sameClass, ...differentClass].slice(0, 3));
    });
  }
}
