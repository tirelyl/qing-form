import { OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { QfFieldConfig } from '../definitions/field-config';
import { FormGroup } from '@angular/forms';
import { QfFormBuilderService } from '../services/form-builder.service';
export declare class QfFormComponent implements OnInit, OnChanges, OnDestroy {
    private formBuilder;
    fields: QfFieldConfig[];
    form: FormGroup;
    private controlChangeSubs;
    private triggerMap;
    constructor(formBuilder: QfFormBuilderService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private setTriggerMap;
    private trackControlChanges;
    private handleTrigger;
}
