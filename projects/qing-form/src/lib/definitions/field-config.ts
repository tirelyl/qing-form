import { AbstractControl, FormGroup } from '@angular/forms';

export type QfFieldType = 'input' | 'select' | 'date' | 'radio' | 'checkbox';

export interface QfFieldConfig {
  key: string;
  type: QfFieldType;
  templateOptions?: QfTemplateOptions;
  formControl?: AbstractControl;
  visible?: boolean;
  extra?: { [k: string]: any };
}

export interface QfTemplateOptions {
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  options?: Array<{ label: string; value: string; checked?: boolean; }>;
  valueType?: 'string' | 'formula' | 'custom';
  formulaExpression?: string;
  visibleExpression?: string;
}
