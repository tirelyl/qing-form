import { Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { QfFieldConfig } from './field-config';

export abstract class QfFieldTypeComponent {
  @Input() field: QfFieldConfig;

  get formControl(): AbstractControl {
    return this.field.formControl;
  }

  get placeholder(): string {
    return this.field.templateOptions ? (this.field.templateOptions.placeholder || '') : '';
  }
}
