import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { Role } from '@shared/role/model/Role';
import { OfferComponent } from './component/offer/offer.component';
import { AddOfferComponent } from './component/add-offer/add-offer.component';
import { ListOffersComponent } from './component/list-offers/list-offers.component';

const routes: Routes = [
  {
    path: '',
    component: OfferComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/offer/list'},
      {
        path: 'add',
        component: AddOfferComponent, 
        canActivate: [SecurityGuard],
        data: { rolesEsperados: [ Role.ADMINISTRADOR, Role.ESTUDIANTE ]}
      },
      {
        path: 'list',
        component: ListOffersComponent, 
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
export class OfferRoutingModule { }
