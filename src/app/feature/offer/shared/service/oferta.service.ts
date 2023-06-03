import { Token } from '@shared/token/model/token';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Oferta } from '../model/Oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private httpService: HttpService) { }

  public agregarOferta(oferta: Oferta): Observable<number> {
    return this.httpService.post<Oferta, number>(`${environment.endpoint}/oferta`, oferta);
  }

  public obtenerOfertas(): Observable<Oferta[]> {
    return this.httpService.get<Oferta[]>(`${environment.endpoint}/oferta`);
  }
}
