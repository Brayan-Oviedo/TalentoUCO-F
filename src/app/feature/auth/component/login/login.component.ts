import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/auth/service/auth.service';
import { TokenService } from '@shared/token/service/token.service';
import { AlertaService } from '@core/service/alerta.service';
import { Usuario } from 'src/app/feature/user/shared/model/usuario';


const LONGITUD_MINIMA_NOMBRE_USUARIO = 3;
const LONGITUD_MINIMA_CONTRASENA = 6;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUsuario: FormGroup;
  usuario: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertaService: AlertaService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.crearFormularioUsuario();
  }

  public ingresar() {
    this.usuario = this.formUsuario.value;
    this.authService.ingresar(this.usuario).subscribe(
      token => {
        this.tokenService.guardarToken(token.token);
        console.log("Guardado!!!!!!!!!!!!!!!!!!!!!!!!")
        this.alertaService.exitoso('Bienvenido', '');
        this.router.navigate(['/']);
      }
    );
  }

  private crearFormularioUsuario() {
    this.formUsuario = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required, Validators.min(LONGITUD_MINIMA_NOMBRE_USUARIO)]],
      contrasena: ['', [Validators.required, Validators.min(LONGITUD_MINIMA_CONTRASENA)]]
    });
  }

}
