import { AbstractControl } from '@angular/forms';
import { QfFieldConfig } from './field-config';
export declare abstract class QfFieldTypeComponent {
    field: QfFieldConfig;
    readonly formControl: AbstractControl;
    readonly placeholder: string;
}
