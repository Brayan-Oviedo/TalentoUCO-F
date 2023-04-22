import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { Role } from '@shared/role/model/Role';
import { AddVehicleComponent } from './component/add-vehicle/add-vehicle.component';
import { ListVehiclesComponent } from './component/list-vehicles/list-vehicles.component';
import { VehicleComponent } from './component/vehicle/vehicle.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/vehicle/list'},
      {
        path: 'add',
        component: AddVehicleComponent, 
        canActivate: [SecurityGuard],
        data: { rolesEsperados: [ Role.ADMINISTRADOR, Role.ESTUDIANTE ]}
      },
      {
        path: 'list',
        component: ListVehiclesComponent, 
        canActivate: [SecurityGuard],
        data: { rolesEsperados: [ Role.ADMINISTRADOR, Role.ESTUDIANTE ]}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
