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
      type: 'checkbox',
      templateOptions: {
        label: '多选框',
        options: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' }
        ]
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
