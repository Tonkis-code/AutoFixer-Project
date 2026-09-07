import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrl = 'http://localhost:3000/api/vehicles';

  constructor(private http: HttpClient) {}

  getVehicles() {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }
}
