import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { FormulaRoutingModule } from './formula-routing.module';
import { FormulaComponent } from './formula.component';


@NgModule({
  declarations: [FormulaComponent],
  imports: [
    ShareModule,
    FormulaRoutingModule
  ]
})
export class FormulaModule { }
