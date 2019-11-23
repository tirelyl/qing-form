import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QfFieldConfig } from '../definitions/field-config';

@Injectable({ providedIn: 'root' })
export class QfFormBuilderService {
  constructor() {}

  buildForm(form: FormGroup, fields: QfFieldConfig[]): void {
    fields.forEach(fieldConfig => {
      this.handleDefualtPorps(fieldConfig);
      this.registerControl(form, fieldConfig);
    });
  }

  private handleDefualtPorps(fieldConfig: QfFieldConfig): void {
    fieldConfig.visible = fieldConfig.visible !== undefined ? fieldConfig.visible : true;
  }

  private registerControl(form: FormGroup, fieldConfig: QfFieldConfig): void {
    const { key, templateOptions } = fieldConfig;
    const { defaultValue } = templateOptions;
    const control = new FormControl(defaultValue);
    fieldConfig.formControl = control;
    form.registerControl(key, control);
  }
}
