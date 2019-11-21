import { Component, OnInit } from '@angular/core';
import { QfFieldTypeComponent } from '../../definitions/field-type.component';

@Component({
  selector: 'qf-select',
  templateUrl: './select.component.html'
})
export class SelectComponent extends QfFieldTypeComponent implements OnInit {

  ngOnInit() {
  }

}
