import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Oferta } from '@offer/shared/model/oferta';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {

  @Input() oferta: Oferta;

  @Output() agregarPostulacion = new EventEmitter<Oferta>();

  constructor() { }

  ngOnInit(): void {
  }

  doAgregarPostulacion() {
    this.agregarPostulacion.emit(this.oferta);
  }
}
