import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertaService } from '@core/service/alerta.service';
import { Oferta } from '@offer/shared/model/oferta';
import { Postulacion } from '@postulation/shared/model/postulacion';
import { PostulacionService } from '@postulation/shared/shared/service/postulacion.service';
import { TokenService } from '@shared/token/service/token.service';




const OPERACION_EXITOSA = 'Operación exitosa';
const POSTULACION_AGREGADA = 'Postulación agregada';

@Component({
  selector: 'app-add-postulation',
  templateUrl: './add-postulation.component.html',
  styleUrls: ['./add-postulation.component.css']
})
export class AddPostulationComponent implements OnInit {

  formPostulacion: FormGroup;
  postulacion: Postulacion;
  oferta: Oferta;

  constructor(
    @Inject (MAT_DIALOG_DATA) data: Oferta,
    public dialogRef: MatDialogRef<AddPostulationComponent>,
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private postulacionService: PostulacionService,
    private alertaService: AlertaService,
    private router: Router
  ) { 
    this.oferta = data;
  }

  ngOnInit(): void {
    this.crearFormularioPostulacion();
  }

  agregarPostulacion() {
    this.postulacion = this.formPostulacion.value;
    this.postulacionService.agregarPostulacion(this.postulacion).subscribe(
      _ => {
        this.alertaService.exitoso(OPERACION_EXITOSA, POSTULACION_AGREGADA);
        this.salir();
      }
    )
  }

  private crearFormularioPostulacion() {
    this.formPostulacion = this.formBuilder.group({
      idOferta: [this.oferta.id, [Validators.required]],
      usuario: this.formBuilder.group({
        nombreUsuario: [this.tokenService.obtenerNombreUsuario(), [Validators.required]]
      }),
      adjunto: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  salir() {
    this.dialogRef.close();
  }

}