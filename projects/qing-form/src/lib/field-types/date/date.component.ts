import { Component, OnInit, Input } from '@angular/core';
import { QfFieldTypeComponent } from '../../definitions/field-type.component';

@Component({
  selector: 'qf-date',
  templateUrl: './date.component.html'
})
export class DateComponent extends QfFieldTypeComponent implements OnInit {

  ngOnInit() {
  }

}