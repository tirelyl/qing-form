import { Component, OnInit } from '@angular/core';
import { QfFieldTypeComponent } from '../../definitions/field-type.component';

@Component({
  selector: 'qf-input',
  templateUrl: './input.component.html'
})
export class InputComponent extends QfFieldTypeComponent implements OnInit {

  ngOnInit() {
  }
}
