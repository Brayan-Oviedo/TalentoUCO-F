import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu';


const VEHICULO_TITULO = 'Vehiculo';
const VEHICULO_ICONO = 'person';

const AGREGAR_VEHICULO_TITULO = 'Agregar vehiculo';
const AGREGAR_VEHICULO_ICONO = 'person';

const LISTAR_VEHICULOS_TITULO = 'Listar vehiculos';
const LISTAR_VEHICULOS_ICONO = 'person';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuVehiculo = new Menu(VEHICULO_TITULO, VEHICULO_ICONO);

  menuAgregarVehiculo = new Menu(
    AGREGAR_VEHICULO_TITULO,
    AGREGAR_VEHICULO_ICONO
  );

  menuListarVehiculos = new Menu(
    LISTAR_VEHICULOS_TITULO,
    LISTAR_VEHICULOS_ICONO
  );

}
