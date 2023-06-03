import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Oferta } from '@offer/shared/model/oferta';
import { OfertaService } from '@offer/shared/service/oferta.service';
import { AddPostulationComponent } from '@postulation/component/add-postulation/add-postulation.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class ListOffersComponent implements OnInit {

  ofertas: Observable<Oferta[]>;

  constructor(
    private ofertaService: OfertaService,
    private dialogo: MatDialog,
  ) { }

  ngOnInit(): void {
    this.obtenerOfertas();
  }

  agregarPostulacion(oferta: Oferta) {
    this.dialogo.open(AddPostulationComponent, {
      data: oferta
    })
  }

  obtenerOfertas() {
    this.ofertas = this.ofertaService.obtenerOfertas();
  } 

}
