import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { Role } from '@shared/role/model/Role';
import { UserComponent } from './component/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [SecurityGuard],
    data: { roleEsperado: [ Role.ADMINISTRADOR, Role.ESTUDIANTE ] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
