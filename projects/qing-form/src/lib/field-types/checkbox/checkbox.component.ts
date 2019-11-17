import { Component, OnInit } from '@angular/core';
import { QfFieldTypeComponent } from '../../definitions/field-type.component';

@Component({
  selector: 'qf-checkbox',
  templateUrl: 'checkbox.component.html'
})

export class CheckboxComponent extends QfFieldTypeComponent implements OnInit {
  checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];

  ngOnInit() { }
}