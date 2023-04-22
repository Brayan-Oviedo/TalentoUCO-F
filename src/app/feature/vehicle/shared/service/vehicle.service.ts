import { Token } from '@shared/token/model/token';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpService: HttpService) { }

  public agregarVehiculo(vehiculo: Vehicle): Observable<Vehicle> {
    return this.httpService.post<Vehicle, Vehicle>(`${environment.endpoint}/vehiculo`, vehiculo);
  }

  public obtenerVehiculos(): Observable<Vehicle[]> {
    return this.httpService.get<Vehicle[]>(`${environment.endpoint}/vehiculo`);
  }

  public parquearVehiculo(vehiculo: Vehicle): Observable<boolean> {
    return this.httpService.put<Vehicle, boolean>(`${environment.endpoint}/vehiculo`, vehiculo);
  }
}
