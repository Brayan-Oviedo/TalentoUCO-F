import { Token } from '@shared/token/model/token';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Postulacion } from '@postulation/shared/model/postulacion';

@Injectable({
  providedIn: 'root'
})
export class PostulacionService {

  constructor(private httpService: HttpService) { }

  public agregarPostulacion(postulacion: Postulacion): Observable<boolean> {
    return this.httpService.post<Postulacion, boolean>(`${environment.endpoint}/postulacion`, postulacion);
  }

}
