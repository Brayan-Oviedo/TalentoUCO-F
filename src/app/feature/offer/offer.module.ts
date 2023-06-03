import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { OfferRoutingModule } from './offer-routing.module';
import { AddOfferComponent } from './component/add-offer/add-offer.component';
import { ListOffersComponent } from './component/list-offers/list-offers.component';
import { OfferComponent } from './component/offer/offer.component';
import { OfferItemComponent } from './component/offer-item/offer-item.component';

@NgModule({
    declarations: [
        AddOfferComponent,
        ListOffersComponent,
        OfferComponent,
        OfferItemComponent
    ],
    imports: [
        OfferRoutingModule,
        SharedModule
    ]
})
export class OfferModule { }
