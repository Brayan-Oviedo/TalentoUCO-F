import { Token } from '@shared/token/model/token';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http/http.service';
import { Usuario } from 'src/app/feature/user/shared/model/usuario';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) { }

  public ingresar(usuario: Usuario): Observable<Token> {
    return this.httpService.post<Usuario, Token>(`${environment.endpoint}/auth`, usuario);
  }

  public registrar(usuario: Usuario): Observable<boolean> {
    return this.httpService.put<Usuario, boolean>(`${environment.endpoint}/auth`, usuario);
  }
}
