import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from '@post-details/component/post-details/post-details.component';
import { AddPostulationComponent } from './component/add-postulation/add-postulation.component';
import { SecurityGuard } from '@core/guard/security.guard';
import { Role } from '@shared/role/model/Role';

const routes: Routes = [
  {
    path: '',
    component: PostDetailsComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/add'},
      {
        path: 'add',
        component: AddPostulationComponent, 
        canActivate: [SecurityGuard],
        data: { rolesEsperados: [ Role.ESTUDIANTE ]}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulationRoutingModule { }
