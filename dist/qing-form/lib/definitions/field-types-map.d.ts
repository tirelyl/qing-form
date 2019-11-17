import { Type } from '@angular/core';
import { QfFieldType } from './field-config';
export declare class QfFieldTypesMap {
    fieldMap: {
        [k: string]: Type<any>;
    };
    constructor(fieldMap: {
        [k: string]: Type<any>;
    });
    fieldMapFn(type: QfFieldType): Type<any>;
}
