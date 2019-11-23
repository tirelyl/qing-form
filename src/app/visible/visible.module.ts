import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { VisibleRoutingModule } from './visible-routing.module';
import { VisibleComponent } from './visible.component';


@NgModule({
  declarations: [VisibleComponent],
  imports: [
    ShareModule,
    VisibleRoutingModule
  ]
})
export class VisibleModule { }
