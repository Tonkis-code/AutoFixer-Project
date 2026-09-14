import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-vehicle-class-card',
  styleUrl: './vehicle-class-card.css',
  templateUrl: './vehicle-class-card.html',
})
export class VehicleClassCard {
  className = input.required<string>();
  imageUrl = input.required<string>();
}
