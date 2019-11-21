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
    },
    {
      key: '4',
      type: 'input',
      templateOptions: {
        label: '得分',
        placeholder: '请输入'
      }
    },
    {
      key: '5',
      type: 'input',
      templateOptions: {
        label: '等级',
        placeholder: '请输入',
        valueType: 'formula',
        formula: 'IF(#4$ >= 60, "及格", "不及格")'
      }
    },
    {
      key: '6',
      type: 'input',
      templateOptions: {
        label: '反馈',
        placeholder: '请输入',
        valueType: 'formula',
        formula: 'CONCAT("你的得分是", #4$, IF(#4$ >= 60, "，已通过", "，请继续努力"))'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
