import { Component, input } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [DecimalPipe, RouterLink],
  selector: 'app-vehicle-card',
  styleUrl: './vehicle-card.css',
  templateUrl: './vehicle-card.html',
})
export class VehicleCard {
  vehicle = input.required<Vehicle>();
}
