import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostulationComponent } from './component/postulation/postulation.component';
import { PostulationRoutingModule } from './postulation-routing.module';
import { AddPostulationComponent } from './component/add-postulation/add-postulation.component';

@NgModule({
    declarations: [
        PostulationComponent,
        AddPostulationComponent
    ],
    imports: [
        PostulationRoutingModule,
        SharedModule
    ]
})
export class PostulationModule { }
