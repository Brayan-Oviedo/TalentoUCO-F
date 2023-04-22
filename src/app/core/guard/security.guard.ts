import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertaService } from '@core/service/alerta.service';
import { TokenService } from '@shared/token/service/token.service';


@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if(!this.tokenService.existeToken()) {
      this.router.navigate(['/auth']);
      return false;
    }
    
    const incluyeRole = this.validarRole(route);

    if(!incluyeRole) {
      this.router.navigate(['/']);
    }

    return incluyeRole;
  }


  private validarRole(route: ActivatedRouteSnapshot): boolean {

    const rolesEsperados = route.data['rolesEsperados'];
    const roles = this.tokenService.obtenerRoles();
    let incluyeRole: boolean = false;
    
    roles.forEach(role => {
      if(rolesEsperados.includes(role.valueOf())) {
        incluyeRole = true;
        return;
      }
    });

    return incluyeRole;
  }

}
