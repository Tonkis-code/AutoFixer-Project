import { Component, OnInit, signal } from '@angular/core';
import { VehicleService } from '../../services/vehicle';
import { Vehicle } from '../../models/vehicle';
import { VehicleCard } from '../../components/vehicle-card/vehicle-card';
import { Hero } from '../../components/hero/hero';
import { VehicleClasses } from '../../components/vehicle-classes/vehicle-classes';

@Component({
  imports: [VehicleCard, Hero, VehicleClasses],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  vehicles = signal<Vehicle[]>([]);

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicles.set(data);
    });
  }
}
