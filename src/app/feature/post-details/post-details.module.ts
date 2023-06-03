import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';
import { PostDetailsFormComponent } from './component/post-details-form/post-details-form.component';

@NgModule({
    declarations: [
        PostDetailsComponent,
        PostDetailsFormComponent
    ],
    imports: [
        PostDetailsRoutingModule,
        SharedModule
    ]
})
export class PostDetailsModule { }
