import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    NgZorroAntdModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    InputComponent,
    CheckboxComponent
  ],
  entryComponents: [
    InputComponent,
    CheckboxComponent
  ],
  exports: [
    InputComponent,
    CheckboxComponent
  ]
})
export class FieldTypesModule {}
