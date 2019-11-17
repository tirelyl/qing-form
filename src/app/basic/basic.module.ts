import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    ShareModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
