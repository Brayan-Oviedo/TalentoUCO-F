import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guard/auth.guard';
import { SecurityGuard } from '@core/guard/security.guard';
import { Role } from '@shared/role/model/Role';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('@auth/auth.module').then(mod => mod.AuthModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('@home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('@user/user.module').then(mod => mod.UserModule),
    canActivate: [SecurityGuard],
    data: { rolesEsperados: [ Role.ADMINISTRADOR, Role.ESTUDIANTE ]}
  },
  {
    path: 'vehicle',
    loadChildren: () => import('@vehicle/vehicle.module').then(mod => mod.VehicleModule),
    canActivate: [SecurityGuard],
    data: { rolesEsperados: [ Role.ADMINISTRADOR, Role.ESTUDIANTE ]}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
