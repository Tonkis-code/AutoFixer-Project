import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle';
import { Vehicle } from '../../models/vehicle';
import { VehicleCard } from '../../components/vehicle-card/vehicle-card';

@Component({
  imports: [VehicleCard],
  selector: 'app-search-results',
  styleUrl: './search-results.css',
  templateUrl: './search-results.html',
})
export class SearchResults {
  private route = inject(ActivatedRoute);
  private vehicleService = inject(VehicleService);

  searchTerm = signal('');
  vehicles = signal<Vehicle[]>([]);
  filteredVehicles = signal<Vehicle[]>([]);

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      const query = params.get('q') ?? '';

      this.searchTerm.set(query);

      this.vehicleService.getVehicles().subscribe((vehicles) => {
        this.vehicles.set(vehicles);

        const filtered = vehicles.filter(
          (vehicle) =>
            vehicle.name.toLowerCase().includes(query.toLowerCase()) ||
            vehicle.manufacturer.toLowerCase().includes(query.toLowerCase()) ||
            vehicle.vehicleClass.toLowerCase().includes(query.toLowerCase()),
        );

        this.filteredVehicles.set(filtered);
      });
    });
  }
}
