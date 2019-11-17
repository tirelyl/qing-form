import { OnInit } from '@angular/core';
import { QfFieldTypeComponent } from '../../definitions/field-type.component';
export declare class CheckboxComponent extends QfFieldTypeComponent implements OnInit {
    checkOptionsOne: ({
        label: string;
        value: string;
        checked: boolean;
    } | {
        label: string;
        value: string;
        checked?: undefined;
    })[];
    ngOnInit(): void;
}
