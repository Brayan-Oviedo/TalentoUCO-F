import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './component/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: PostDetailsComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/home'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostDetailsRoutingModule { }
