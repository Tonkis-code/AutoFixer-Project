import { Component, input } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [DecimalPipe],
  selector: 'app-vehicle-card',
  styleUrl: './vehicle-card.css',
  templateUrl: './vehicle-card.html',
})
export class VehicleCard {
  vehicle = input.required<Vehicle>();
}
