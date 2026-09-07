import { Component, OnInit, signal } from '@angular/core';
import { VehicleService } from '../../services/vehicle';
import { Vehicle } from '../../models/vehicle';

@Component({
  imports: [],
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
