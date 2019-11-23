import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QfFieldConfig } from 'qing-form';

@Component({
  selector: 'app-visible',
  templateUrl: './visible.component.html',
  styleUrls: ['./visible.component.scss']
})
export class VisibleComponent implements OnInit {
  form = new FormGroup({});
  fields: QfFieldConfig[] = [
    {
      key: '1',
      type: 'select',
      templateOptions: {
        label: '选择器',
        placeholder: '请选择',
        options: [
          { label: 'A', value: 'A' },
          { label: 'B', value: 'B' },
          { label: 'C', value: 'C' }
        ]
      }
    },
    {
      key: '2',
      type: 'input',
      visible: false,
      templateOptions: {
        label: 'A',
        placeholder: '请输入',
        visibleExpression: `"#1$" === "A"`
      }
    },
    {
      key: '3',
      type: 'input',
      visible: false,
      templateOptions: {
        label: 'B',
        placeholder: '请输入',
        visibleExpression: `"#1$" === "B"`
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
