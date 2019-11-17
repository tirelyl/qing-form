import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QfFieldConfig } from '../definitions/field-config';

@Injectable({ providedIn: 'root' })
export class QfFormBuilderService {
  constructor() {}

  buildForm(form: FormGroup, fields: QfFieldConfig[]): void {
    fields.forEach(fieldConfig => {
      this.registerControl(form, fieldConfig);
    });
  }

  private registerControl(form: FormGroup, fieldConfig: QfFieldConfig): void {
    const { key, templateOptions } = fieldConfig;
    const { defaultValue, options } = templateOptions;
    const control = new FormControl(defaultValue || options);
    fieldConfig.formControl = control;
    form.registerControl(key, control);
  }
}
