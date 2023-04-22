import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material.module';
import { MenuComponent } from './menu/component/menu.component';
import { NavbarComponent } from './navbar/component/navbar.component';

@NgModule({
  declarations: [
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    MenuComponent,
    NavbarComponent
  ],
  providers: []
})
export class SharedModule { }
