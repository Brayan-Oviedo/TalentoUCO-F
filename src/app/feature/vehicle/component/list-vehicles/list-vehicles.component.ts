import { Component, OnInit } from '@angular/core';
import { AlertaService } from '@core/service/alerta.service';
import { Vehicle } from '@vehicle/shared/model/vehicle';
import { VehicleService } from '@vehicle/shared/service/vehicle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  vehiculos: Observable<Vehicle[]>;

  constructor(
    private vehiculoService: VehicleService,
    private alertaService: AlertaService
  ) { }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  obtenerVehiculos() {
    this.vehiculos = this.vehiculoService.obtenerVehiculos();
  } 

  private validarSiHayVehiculos(vehiculos: Vehicle[]) {
    if(vehiculos.length == 0) {
      this.alertaService.error('Lista vacia', 'No hay vehiculos')
    }
  }

  parquearVehiculo(vehiculo: Vehicle) {
    this.vehiculoService.parquearVehiculo(vehiculo).subscribe(
      _ => {
        this.alertaService.exitoso('Parqueo exitoso', 'El vehiculo esta parqueado')
      }
    );
  } 
}
