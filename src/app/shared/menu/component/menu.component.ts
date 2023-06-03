import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu';


const OFERTA_TITULO = 'Oferta';
const OFERTA_ICONO = 'person';

const AGREGAR_OFERTA_TITULO = 'Agregar oferta';
const AGREGAR_OFERTA_ICONO = 'person';

const LISTAR_OFERTA_TITULO = 'Listar ofertas';
const LISTAR_OFERTA_ICONO = 'book';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  menuOferta = new Menu(OFERTA_TITULO, OFERTA_ICONO);

  menuAgregarOferta = new Menu(
    AGREGAR_OFERTA_TITULO,
    AGREGAR_OFERTA_ICONO
  );

  menuListarOfertas = new Menu(
    LISTAR_OFERTA_TITULO,
    LISTAR_OFERTA_ICONO
  );

}
