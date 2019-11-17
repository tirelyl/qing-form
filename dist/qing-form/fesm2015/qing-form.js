import { CommonModule } from '@angular/common';
import { Input, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, NgModule, Injectable, ɵɵdefineInjectable } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { calculate } from 'formula-calculator';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/definitions/field-types-map.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QfFieldTypesMap {
    /**
     * @param {?} fieldMap
     */
    constructor(fieldMap) {
        this.fieldMap = fieldMap;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    fieldMapFn(type) {
        return this.fieldMap[type];
    }
}
if (false) {
    /** @type {?} */
    QfFieldTypesMap.prototype.fieldMap;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/definitions/field-type.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class QfFieldTypeComponent {
    /**
     * @return {?}
     */
    get formControl() {
        return this.field.formControl;
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this.field.templateOptions ? (this.field.templateOptions.placeholder || '') : '';
    }
}
QfFieldTypeComponent.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    QfFieldTypeComponent.prototype.field;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/field-types/input/input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent extends QfFieldTypeComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    log(value) {
        console.log(value);
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'qf-input',
                template: "<input\r\n  nz-input\r\n  [placeholder]=\"placeholder\"\r\n  [formControl]=\"formControl\">"
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/field-types/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent extends QfFieldTypeComponent {
    constructor() {
        super(...arguments);
        this.checkOptionsOne = [
            { label: 'Apple', value: 'Apple', checked: true },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'qf-checkbox',
                template: "<nz-checkbox-group [formControl]=\"formControl\"></nz-checkbox-group>"
            }] }
];
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.checkOptionsOne;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/field-types/base-field-map.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const QfBaseFieldTypesMap = {
    input: InputComponent,
    checkbox: CheckboxComponent
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/field/field.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QfFieldComponent {
    /**
     * @param {?} cfr
     */
    constructor(cfr) {
        this.cfr = cfr;
    }
    /**
     * @return {?}
     */
    get label() {
        return this.field.templateOptions ? this.field.templateOptions.label : '';
    }
    /**
     * @return {?}
     */
    get componentType() {
        this.fieldTypesMap = new QfFieldTypesMap(QfBaseFieldTypesMap);
        return this.fieldTypesMap.fieldMapFn(this.field.type);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const componentFactory = this.cfr.resolveComponentFactory(this.componentType);
        this.componentContainerRef.clear();
        this.componentRef = this.componentContainerRef.createComponent(componentFactory);
        /** @type {?} */
        const instance = this.componentRef.instance;
        Object.assign(instance, { field: this.field });
        this.componentRef.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
QfFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'qf-field',
                template: "<div class=\"qf-field-item\">\n  <div *ngIf=\"label\" class=\"qf-field-label\">\n    <label>{{ label }}</label>\n  </div>\n  <ng-template #componentContainer></ng-template>\n</div>",
                styles: [".qf-field-item{margin-bottom:16px}.qf-field-label{font-size:14px;font-weight:500;padding:0 0 5px}"]
            }] }
];
/** @nocollapse */
QfFieldComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
QfFieldComponent.propDecorators = {
    field: [{ type: Input }],
    componentContainerRef: [{ type: ViewChild, args: ['componentContainer', { read: ViewContainerRef, static: true },] }]
};
if (false) {
    /** @type {?} */
    QfFieldComponent.prototype.fieldTypesMap;
    /** @type {?} */
    QfFieldComponent.prototype.componentRef;
    /** @type {?} */
    QfFieldComponent.prototype.field;
    /** @type {?} */
    QfFieldComponent.prototype.componentContainerRef;
    /**
     * @type {?}
     * @private
     */
    QfFieldComponent.prototype.cfr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/field-types/field-types.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldTypesModule {
}
FieldTypesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgZorroAntdModule,
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule
                ],
                declarations: [
                    InputComponent,
                    CheckboxComponent
                ],
                entryComponents: [
                    InputComponent,
                    CheckboxComponent
                ],
                exports: [
                    InputComponent,
                    CheckboxComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/form-builder.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QfFormBuilderService {
    constructor() { }
    /**
     * @param {?} form
     * @param {?} fields
     * @return {?}
     */
    buildForm(form, fields) {
        fields.forEach((/**
         * @param {?} fieldConfig
         * @return {?}
         */
        fieldConfig => {
            this.registerControl(form, fieldConfig);
        }));
    }
    /**
     * @private
     * @param {?} form
     * @param {?} fieldConfig
     * @return {?}
     */
    registerControl(form, fieldConfig) {
        const { key, templateOptions } = fieldConfig;
        const { defaultValue, options } = templateOptions;
        /** @type {?} */
        const control = new FormControl(defaultValue || options);
        fieldConfig.formControl = control;
        form.registerControl(key, control);
    }
}
QfFormBuilderService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
QfFormBuilderService.ctorParameters = () => [];
/** @nocollapse */ QfFormBuilderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function QfFormBuilderService_Factory() { return new QfFormBuilderService(); }, token: QfFormBuilderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FORMULA_REX = /#.+?\$/g;
/**
 * @param {?} formula
 * @param {?} fileds
 * @return {?}
 */
function getFormulaTriggerKeys(formula, fileds) {
    /** @type {?} */
    const relatedFields = [];
    if (!formula.match(FORMULA_REX)) {
        return [];
    }
    formula.match(FORMULA_REX).forEach((/**
     * @param {?} item
     * @return {?}
     */
    item => {
        const [key] = item.substring(1, item.indexOf('$')).split('.');
        relatedFields.push(key);
    }));
    return relatedFields;
}
/**
 * @param {?} formula
 * @param {?} form
 * @return {?}
 */
function calculateFormula(formula, form) {
    /** @type {?} */
    const parsedFormula = formula.replace(FORMULA_REX, (/**
     * @param {?} item
     * @return {?}
     */
    item => {
        const [key] = item.substring(1, item.indexOf('$')).split('.');
        return form.get(key).value;
    }));
    try {
        return calculate(parsedFormula);
    }
    catch (error) {
        console.error(error);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/form/form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QfFormComponent {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.controlChangeSubs = [];
        this.triggerMap = new Map();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.controlChangeSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        sub => sub.unsubscribe()));
        this.formBuilder.buildForm(this.form, this.fields);
        this.setTriggerMap();
        this.trackControlChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.controlChangeSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        sub => sub.unsubscribe()));
        this.controlChangeSubs = [];
        this.triggerMap.clear();
    }
    /**
     * @private
     * @return {?}
     */
    setTriggerMap() {
        this.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            const { templateOptions } = field;
            const { formula } = templateOptions;
            if (formula) {
                /** @type {?} */
                const triggerKeys = getFormulaTriggerKeys(formula, this.fields);
                triggerKeys.forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    if (!this.triggerMap.has(key)) {
                        this.triggerMap.set(key, []);
                    }
                    this.triggerMap.get(key).push(field);
                }));
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    trackControlChanges() {
        this.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            const { formControl, key } = field;
            /** @type {?} */
            const valueChanges = formControl.valueChanges;
            this.controlChangeSubs.push(valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                if (this.triggerMap.has(key)) {
                    this.handleTrigger(this.triggerMap.get(key));
                }
            })));
        }));
    }
    /**
     * @private
     * @param {?} targetFields
     * @return {?}
     */
    handleTrigger(targetFields) {
        targetFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            const { key, templateOptions } = field;
            const { valueType, formula } = templateOptions;
            if (valueType === 'formula') {
                /** @type {?} */
                const calcValue = calculateFormula(formula, this.form);
                this.form.get(key).setValue(calcValue);
            }
        }));
    }
}
QfFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'qf-form',
                template: "<ng-container *ngFor=\"let field of fields\">\r\n  <qf-field [field]=\"field\"></qf-field>\r\n</ng-container>"
            }] }
];
/** @nocollapse */
QfFormComponent.ctorParameters = () => [
    { type: QfFormBuilderService }
];
QfFormComponent.propDecorators = {
    fields: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    QfFormComponent.prototype.fields;
    /** @type {?} */
    QfFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    QfFormComponent.prototype.controlChangeSubs;
    /**
     * @type {?}
     * @private
     */
    QfFormComponent.prototype.triggerMap;
    /**
     * @type {?}
     * @private
     */
    QfFormComponent.prototype.formBuilder;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/qing-form.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QingFormModule {
}
QingFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FieldTypesModule
                ],
                declarations: [
                    QfFieldComponent,
                    QfFormComponent
                ],
                exports: [
                    QfFieldComponent,
                    QfFormComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/definitions/field-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function QfFieldConfig() { }
if (false) {
    /** @type {?} */
    QfFieldConfig.prototype.key;
    /** @type {?} */
    QfFieldConfig.prototype.type;
    /** @type {?|undefined} */
    QfFieldConfig.prototype.templateOptions;
    /** @type {?|undefined} */
    QfFieldConfig.prototype.formControl;
    /** @type {?|undefined} */
    QfFieldConfig.prototype.extra;
}
/**
 * @record
 */
function QfTemplateOptions() { }
if (false) {
    /** @type {?|undefined} */
    QfTemplateOptions.prototype.label;
    /** @type {?|undefined} */
    QfTemplateOptions.prototype.placeholder;
    /** @type {?|undefined} */
    QfTemplateOptions.prototype.defaultValue;
    /** @type {?|undefined} */
    QfTemplateOptions.prototype.options;
    /** @type {?|undefined} */
    QfTemplateOptions.prototype.valueType;
    /** @type {?|undefined} */
    QfTemplateOptions.prototype.formula;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: qing-form.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { QingFormModule, FieldTypesModule as ɵa, InputComponent as ɵb, QfFieldTypeComponent as ɵc, CheckboxComponent as ɵd, QfFieldComponent as ɵe, QfFormComponent as ɵf, QfFormBuilderService as ɵg };
//# sourceMappingURL=qing-form.js.map
