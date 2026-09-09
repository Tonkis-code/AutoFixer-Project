import { Component, input } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [DecimalPipe],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  vehicle = input.required<Vehicle>();
}
