import { FormGroup } from '@angular/forms';
import { QfFieldConfig } from '../definitions/field-config';
export declare class QfFormBuilderService {
    constructor();
    buildForm(form: FormGroup, fields: QfFieldConfig[]): void;
    private registerControl;
}
