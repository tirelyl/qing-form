import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaComponent } from './formula.component';


const routes: Routes = [
  {
    path: '',
    component: FormulaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaRoutingModule { }
