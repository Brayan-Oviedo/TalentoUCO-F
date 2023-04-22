import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AddVehicleComponent } from './component/add-vehicle/add-vehicle.component';
import { VehicleComponent } from './component/vehicle/vehicle.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleItemComponent } from './component/vehicle-item/vehicle-item.component';
import { ListVehiclesComponent } from './component/list-vehicles/list-vehicles.component';

@NgModule({
    declarations: [
        VehicleComponent,
        AddVehicleComponent,
        VehicleItemComponent,
        ListVehiclesComponent
    ],
    imports: [
        VehicleRoutingModule,
        SharedModule
    ]
})
export class VehicleModule { }
