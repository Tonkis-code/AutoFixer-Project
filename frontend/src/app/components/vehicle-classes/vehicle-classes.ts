import { Component } from '@angular/core';
import { VehicleClassCard } from '../vehicle-class-card/vehicle-class-card';

@Component({
  imports: [VehicleClassCard],
  selector: 'app-vehicle-classes',
  styleUrl: './vehicle-classes.css',
  templateUrl: './vehicle-classes.html',
})
export class VehicleClasses {
  vehicleClasses = [
    {
      className: 'Hypercar',
      imageUrl: 'caliburn.png',
    },
    {
      className: 'Sport',
      imageUrl: 'type66avenger.png',
    },
    {
      className: 'Motorcycle',
      imageUrl: 'kusanagict3x.png',
    },
    {
      className: 'Offroad',
      imageUrl: 'shioncoyote.png',
    },
  ];
}
