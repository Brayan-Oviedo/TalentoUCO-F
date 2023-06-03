import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacto } from '@contact/shared/model/contacto';
import { AlertaService } from '@core/service/alerta.service';
import { Oferta } from '@offer/shared/model/Oferta';
import { OfertaService } from '@offer/shared/service/oferta.service';
import { TokenService } from '@shared/token/service/token.service';
import { Usuario } from '@user/shared/model/usuario';




const OPERACION_EXITOSA = 'Operación exitosa';
const OFERTA_AGREGADA = 'Oferta agregada';


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  formOferta: FormGroup;
  oferta: Oferta;
  usuario: Usuario;
  contacto: Contacto;
  tags: string[] = ["OFERTA", "TEMPORAL", "TIEMPO COMPLETO"];


  constructor(
    private formBuilder: FormBuilder,
    private alertaService: AlertaService,
    private tokenService: TokenService,
    private ofertaService: OfertaService,
    private router: Router
  ) { }

  ngOnInit(): void {  
    this.crearFormularioOferta();
  }

  agregarOferta() {
    this.oferta = this.formOferta.value;
    this.ofertaService.agregarOferta(this.oferta).subscribe(
      _ => {
        this.alertaService.exitoso(OPERACION_EXITOSA, OFERTA_AGREGADA);
        //this.router.navigate(['/offer/list']);
      }
    )
  } 

  private crearFormularioOferta() {
    this.formOferta = this.formBuilder.group({
      usuario: this.formBuilder.group({
        nombreUsuario: [this.tokenService.obtenerNombreUsuario(), [Validators.required]]
      }),
      postDetalles: this.formBuilder.group({
        titulo: ['', [Validators.required]],
        descripcion: ['', [Validators.required]]
      }),
      contacto: this.formBuilder.group({
        nombre: ['', [Validators.required]],
        correo: ['', [Validators.required]],
        celular: ['', [Validators.required]],
        ciudad: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
      }),
      estaActiva: [true, [Validators.required]],
      tags: this.formBuilder.array(this.tags)
    });
  }

}
