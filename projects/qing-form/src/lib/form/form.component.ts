import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { QfFieldConfig } from '../definitions/field-config';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { QfFormBuilderService } from '../services/form-builder.service';
import { getTriggerKeys, calculateFormula, getFieldVisible } from '../utils';

@Component({
  selector: 'qf-form',
  templateUrl: './form.component.html'
})
export class QfFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() fields: QfFieldConfig[];
  @Input() form: FormGroup;

  private controlChangeSubs: Subscription[] = [];
  private triggerMap =  new Map<string, QfFieldConfig[]>();

  constructor(
    private formBuilder: QfFormBuilderService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.controlChangeSubs.forEach(sub => sub.unsubscribe());
    this.formBuilder.buildForm(this.form, this.fields);
    this.setTriggerMap();
    this.trackControlChanges();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.controlChangeSubs.forEach(sub => sub.unsubscribe());
    this.controlChangeSubs = [];
    this.triggerMap.clear();
  }

  private setTriggerMap(): void {
    this.fields.forEach(field => {
      const { templateOptions } = field;
      const { formulaExpression, visibleExpression } = templateOptions;
      [ formulaExpression, visibleExpression ].forEach(expression => {
        if (expression) {
          this.parseExpression(expression, field);
        }
      });
    });
  }

  private parseExpression(expression: string, field: QfFieldConfig): void {
    const triggerKeys = getTriggerKeys(expression);
    triggerKeys.forEach(key => {
      if (!this.triggerMap.has(key)) {
        this.triggerMap.set(key, []);
      }
      this.triggerMap.get(key).push(field);
    });
  }

  private trackControlChanges(): void {
    this.fields.forEach(field => {
      const { formControl, key } = field;
      const valueChanges = formControl.valueChanges;
      this.controlChangeSubs.push(valueChanges.subscribe(value => {
        if (this.triggerMap.has(key)) {
          this.handleTrigger(this.triggerMap.get(key));
        }
      }));
    });
  }

  private handleTrigger(targetFields: QfFieldConfig[]): void {
    targetFields.forEach(field => {
      const { key, templateOptions } = field;
      const { valueType, formulaExpression, visibleExpression } = templateOptions;
      if (valueType === 'formula') {
        const calcValue = calculateFormula(formulaExpression, this.form);
        this.form.get(key).setValue(calcValue);
      }
      if (visibleExpression) {
        const visible = getFieldVisible(visibleExpression, this.form);
        field.visible = visible;
      }
    });
  }

}
