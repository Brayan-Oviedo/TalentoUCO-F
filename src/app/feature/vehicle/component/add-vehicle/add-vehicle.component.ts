import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertaService } from '@core/service/alerta.service';
import { Vehicle } from '@vehicle/shared/model/vehicle';
import { VehicleService } from '@vehicle/shared/service/vehicle.service';


const LONGITUD_MINIMA_PLACA = 6;

const OPERACION_EXITOSA = 'Operación exitosa';
const VEHICULO_AGREGADO = 'Vehiculo agregado';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  formVehiculo: FormGroup;
  vehiculo: Vehicle;

  constructor(
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private alertaService: AlertaService,
    private router: Router
  ) { }

  ngOnInit(): void {  
    this.crearFormularioVehiculo();
  }

  agregarVehiculo() {
    this.vehiculo = this.formVehiculo.value;
    this.vehicleService.agregarVehiculo(this.vehiculo).subscribe(
      _ => {
        this.alertaService.exitoso(OPERACION_EXITOSA, VEHICULO_AGREGADO);
        this.router.navigate(['/home']);
      }
    )
  } 

  private crearFormularioVehiculo() {
    this.formVehiculo = this.formBuilder.group({
      placa: ['', [Validators.required, Validators.min(LONGITUD_MINIMA_PLACA)]],
    });
  }

}
