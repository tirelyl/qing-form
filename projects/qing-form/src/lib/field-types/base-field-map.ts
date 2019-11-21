import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DateComponent } from './date/date.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';

export const QfBaseFieldTypesMap = {
  input: InputComponent,
  checkbox: CheckboxComponent,
  date: DateComponent,
  radio: RadioComponent,
  select: SelectComponent
};
