import { AbstractControl } from '@angular/forms';

export type QfFieldType = 'input' | 'textarea' | 'date' | 'radio' | 'checkbox';

export interface QfFieldConfig {
  key: string;
  type: QfFieldType;
  templateOptions?: QfTemplateOptions;
  formControl?: AbstractControl;
  extra?: { [k: string]: any };
}

export interface QfTemplateOptions {
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  options?: Array<{ label: string; value: string; checked?: boolean; }>;
  valueType?: 'string' | 'formula' | 'custom';
  formula?: string;
}
