import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { HomeModule } from '@home/home.module';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './feature/auth/auth.module';
import { HttpService } from '@core/service/http/http.service';
import { VehicleModule } from '@vehicle/vehicle.module';
import { Interceptor } from '@core/interceptor/token-interceptor';
import { OfferModule } from '@offer/offer.module';
import { PostDetailsModule } from '@post-details/post-details.module';
import { PostulationModule } from '@postulation/postulation.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AuthModule,
    OfferModule,
    PostDetailsModule,
    PostulationModule,
    VehicleModule
  ],
  providers: [ CookieService, HttpService, Interceptor ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
