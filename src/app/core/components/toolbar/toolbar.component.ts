import { Component, OnInit } from '@angular/core';
import { TokenService } from '@shared/token/service/token.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  appName = 'Parking';

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    this.tokenService.limpiarToken();
  }

  estaLogueado(): boolean {
    return this.tokenService.existeToken();
  }
}
