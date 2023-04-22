import { Injectable } from '@angular/core';
import { AlertaService } from '@core/service/alerta.service';
import { CookieService } from 'ngx-cookie-service';


const TOKEN = 'token';
const PERIOD = '.';
const EMPTY = '';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private cookieService: CookieService,
    private alertaService: AlertaService
  ) { }



  public guardarToken(token: string) {
    this.alertaService.error('Error', token)
    this.cookieService.set(TOKEN, token);
  }

  public obtenerToken(): string {
    return this.cookieService.get(TOKEN);
  }

  public existeToken(): boolean {
    console.log('Token: ' + this.cookieService.check(TOKEN).toString())
    return this.cookieService.check(TOKEN);
  }

  public limpiarToken() {
    this.cookieService.delete(TOKEN);
  }

  public obtenerNombreUsuario(): string {

    if(!this.existeToken())
      return EMPTY;

    return this.obtenerInformacionToken().sub;
  }

  public obtenerRoles(): Set<string> {

    if(!this.existeToken())
      return new Set<string>();

    return this.obtenerInformacionToken().roles;
  }


  private obtenerInformacionToken() {
    let token = this.obtenerToken();
    token = token.split(PERIOD)[1];
    let informacionToken = window.atob(token);
    return JSON.parse(informacionToken);
  }
}
