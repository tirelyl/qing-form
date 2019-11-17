import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QfFieldComponent } from './field/field.component';
import { FieldTypesModule } from './field-types/field-types.module';
import { QfFormComponent } from './form/form.component';


@NgModule({
  imports: [
    CommonModule,
    FieldTypesModule
  ],
  declarations: [
    QfFieldComponent,
    QfFormComponent
  ],
  exports: [
    QfFieldComponent,
    QfFormComponent
  ]
})
export class QingFormModule { }
