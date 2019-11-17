import { Component, OnInit, Input } from '@angular/core';
import { QfFieldTypeComponent } from '../../definitions/field-type.component';

@Component({
  selector: 'qf-input',
  templateUrl: './input.component.html'
})
export class InputComponent extends QfFieldTypeComponent implements OnInit {

  ngOnInit() {
  }

  log(value: object[]): void {
    console.log(value);
  }

}
