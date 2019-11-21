import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DateComponent } from './date/date.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';

const COMPONENTS = [
  InputComponent,
  CheckboxComponent,
  DateComponent,
  RadioComponent,
  SelectComponent
];

@NgModule({
  imports: [
    NgZorroAntdModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  entryComponents: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class FieldTypesModule {}
