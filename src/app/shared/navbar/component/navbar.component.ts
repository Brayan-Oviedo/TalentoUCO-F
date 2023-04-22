import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TokenService } from '@shared/token/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  @Input() paginaActual: string;
  @Input() busqueda = false;
  @Input() tituloBusqueda: string;

  @Output() buscar = new EventEmitter<string>();

  item: string;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
  }

  doBuscar() {
    this.buscar.emit(this.item);
  }

  estaLogueado(): boolean {
    return this.tokenService.existeToken();
  }
}
