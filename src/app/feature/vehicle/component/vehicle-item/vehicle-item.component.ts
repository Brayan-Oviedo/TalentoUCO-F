import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vehicle } from '@vehicle/shared/model/vehicle';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent implements OnInit {

  @Input() vehiculo: Vehicle;

  @Output() parquear = new EventEmitter<Vehicle>();

  constructor() { }

  ngOnInit(): void {
  }

  doParquear() {
    this.parquear.emit(this.vehiculo);
  }


}
