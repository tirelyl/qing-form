import { FormGroup } from '@angular/forms';
import { QfFieldConfig } from './definitions/field-config';
export declare function getFormulaTriggerKeys(formula: string, fileds: QfFieldConfig[]): string[];
export declare function calculateFormula(formula: string, form: FormGroup): any;
