import { Component, OnInit } from '@angular/core';
import { QfFieldTypeComponent } from '../../definitions/field-type.component';

@Component({
  selector: 'qf-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent extends QfFieldTypeComponent implements OnInit {

  ngOnInit() {
  }

}
