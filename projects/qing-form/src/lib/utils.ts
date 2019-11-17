import { FormGroup } from '@angular/forms';
import * as calculator from 'formula-calculator';
import { QfFieldConfig } from './definitions/field-config';

const FORMULA_REX = /#.+?\$/g;

export function getFormulaTriggerKeys(formula: string, fileds: QfFieldConfig[]): string[] {
  const relatedFields = [];
  if (!formula.match(FORMULA_REX)) {
    return [];
  }
  formula.match(FORMULA_REX).forEach(item => {
    const [key] = item.substring(1, item.indexOf('$')).split('.');
    relatedFields.push(key);
  });
  return relatedFields;
}

export function calculateFormula(formula: string, form: FormGroup): any {
  const parsedFormula = formula.replace(FORMULA_REX, item => {
    const [key] = item.substring(1, item.indexOf('$')).split('.');
    return form.get(key).value;
  });
  try {
    return calculator.calculate(parsedFormula);
  } catch (error) {
    console.error(error);
  }
}
