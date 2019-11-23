import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QfFieldConfig } from 'qing-form';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  form = new FormGroup({});
  fields: QfFieldConfig[] = [
    {
      key: '1',
      type: 'input',
      templateOptions: {
        label: '输入框',
        placeholder: '我是提示'
      }
    },
    {
      key: '2',
      type: 'date',
      templateOptions: {
        label: '日期选择框',
        placeholder: '请选择日期'
      }
    },
    {
      key: '3',
      type: 'checkbox',
      templateOptions: {
        label: '多选框',
        defaultValue: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' }
        ]
      }
    },
    {
      key: '4',
      type: 'radio',
      templateOptions: {
        label: '单选框',
        options: [
          { label: 'A', value: 'A' },
          { label: 'B', value: 'B' },
          { label: 'C', value: 'C' }
        ]
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
