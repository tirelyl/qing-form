import { FormGroup } from '@angular/forms';
import * as calculator from 'formula-calculator';
import { QfFieldConfig } from './definitions/field-config';

const FIELD_REX = /#.+?\$/g;

function parseExpression(expression: string, form: FormGroup): string {
  const parsedExpression = expression.replace(FIELD_REX, item => {
    const [key] = item.substring(1, item.indexOf('$')).split('.');
    return form.get(key).value;
  });
  return parsedExpression;
}

export function getTriggerKeys(formula: string): string[] {
  const relatedFields = [];
  if (!formula.match(FIELD_REX)) {
    return [];
  }
  formula.match(FIELD_REX).forEach(item => {
    const [key] = item.substring(1, item.indexOf('$')).split('.');
    relatedFields.push(key);
  });
  return relatedFields;
}

export function calculateFormula(expression: string, form: FormGroup): any {
  const parsedFormula = parseExpression(expression, form);
  try {
    console.log(parsedFormula);
    return calculator.calculate(parsedFormula);
  } catch (error) {
    console.error(error);
  }
}

export function getFieldVisible(expression: string, form: FormGroup): boolean {
  const visibleExporession = parseExpression(expression, form);
  return Function(`return ${visibleExporession}`)();
}
