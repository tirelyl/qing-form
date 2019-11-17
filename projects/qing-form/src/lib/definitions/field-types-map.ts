import { Type } from '@angular/core';
import { QfFieldType } from './field-config';

export class QfFieldTypesMap {
  fieldMap: { [k: string]: Type<any> };

  constructor(
    fieldMap: { [k: string]: Type<any> }
  ) {
    this.fieldMap = fieldMap;
  }

  fieldMapFn(type: QfFieldType): Type<any> {
    return this.fieldMap[type];
  }
}
