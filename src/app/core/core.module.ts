import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertaService } from './service/alerta.service';
import { ManejadorError } from './interceptor/error/manejador-error';
import { Interceptor } from './interceptor/token-interceptor';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AlertaService,
    Interceptor,
    { provide: ErrorHandler, useClass: ManejadorError }
  ]
})
export class CoreModule { }
