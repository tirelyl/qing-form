import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisibleComponent } from './visible.component';


const routes: Routes = [
  {
    path: '',
    component: VisibleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisibleRoutingModule { }
