import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QfFieldConfig } from 'qing-form';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent implements OnInit {
  form = new FormGroup({});
  fields: QfFieldConfig[] = [
    {
      key: '1',
      type: 'input',
      templateOptions: {
        label: '数字1',
        placeholder: '请输入'
      }
    },
    {
      key: '2',
      type: 'input',
      templateOptions: {
        label: '数字2',
        placeholder: '请输入'
      }
    },
    {
      key: '3',
      type: 'input',
      templateOptions: {
        label: '求和',
        placeholder: '请输入',
        valueType: 'formula',
        formula: 'SUM(#1$ + #2$)'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
