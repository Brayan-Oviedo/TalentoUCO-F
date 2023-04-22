import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/auth/service/auth.service';
import { AlertaService } from '@core/service/alerta.service';
import { Usuario } from 'src/app/feature/user/shared/model/usuario';
import { FormValidador } from '@shared/form-validador';
import { Role } from '@shared/role/model/Role';


const LONGITUD_MINIMA_NOMBRE_USUARIO = 3;
const LONGITUD_MINIMA_CONTRASENA = 6;
const REGISTRO_EXISTOSO = 'Registro existoso';
const HAS_SIDO_REGISTRADO_CORRECTAMENTE = 'Has sido registrado correctamente';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formUsuario: FormGroup;
  usuario: Usuario;
  rolesPermitidos = [Role.ADMINISTRADOR.valueOf(), Role.ESTUDIANTE.valueOf()];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertaService: AlertaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.crearFormularioUsuario();
  }

  public registrar() {
    this.usuario = this.formUsuario.value;
    console.log('Usuario: ' + this.usuario);
    this.authService.registrar(this.usuario).subscribe(
      _ => {
        this.alertaService.exitoso(REGISTRO_EXISTOSO, HAS_SIDO_REGISTRADO_CORRECTAMENTE);
        this.router.navigate(['/auth/login']);
      }
    );
  }

  private crearFormularioUsuario() {
    this.formUsuario = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required, Validators.min(LONGITUD_MINIMA_NOMBRE_USUARIO)]],
      contrasena: ['', [Validators.required, Validators.min(LONGITUD_MINIMA_CONTRASENA)]],
      confirmarContrasena: ['', [Validators.required, Validators.min(LONGITUD_MINIMA_CONTRASENA)]],
      roles: [[], [Validators.required]]
    }, {
      validators: FormValidador.contrasenasIguales
    });
  }

}
