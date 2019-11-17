import { CommonModule } from '@angular/common';
import { Input, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, NgModule, Injectable, ɵɵdefineInjectable } from '@angular/core';
import { __extends, __read } from 'tslib';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { calculate } from 'formula-calculator';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/definitions/field-types-map.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QfFieldTypesMap = /** @class */ (function () {
    function QfFieldTypesMap(fieldMap) {
        this.fieldMap = fieldMap;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    QfFieldTypesMap.prototype.fieldMapFn = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.fieldMap[type];
    };
    return QfFieldTypesMap;
}());
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
var QfFieldTypeComponent = /** @class */ (function () {
    function QfFieldTypeComponent() {
    }
    Object.defineProperty(QfFieldTypeComponent.prototype, "formControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.formControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QfFieldTypeComponent.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.templateOptions ? (this.field.templateOptions.placeholder || '') : '';
        },
        enumerable: true,
        configurable: true
    });
    QfFieldTypeComponent.propDecorators = {
        field: [{ type: Input }]
    };
    return QfFieldTypeComponent;
}());
if (false) {
    /** @type {?} */
    QfFieldTypeComponent.prototype.field;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/field-types/input/input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputComponent = /** @class */ (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InputComponent.prototype.log = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        console.log(value);
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qf-input',
                    template: "<input\r\n  nz-input\r\n  [placeholder]=\"placeholder\"\r\n  [formControl]=\"formControl\">"
                }] }
    ];
    return InputComponent;
}(QfFieldTypeComponent));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/field-types/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxComponent = /** @class */ (function (_super) {
    __extends(CheckboxComponent, _super);
    function CheckboxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkOptionsOne = [
            { label: 'Apple', value: 'Apple', checked: true },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qf-checkbox',
                    template: "<nz-checkbox-group [formControl]=\"formControl\"></nz-checkbox-group>"
                }] }
    ];
    return CheckboxComponent;
}(QfFieldTypeComponent));
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
var QfBaseFieldTypesMap = {
    input: InputComponent,
    checkbox: CheckboxComponent
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/field/field.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QfFieldComponent = /** @class */ (function () {
    function QfFieldComponent(cfr) {
        this.cfr = cfr;
    }
    Object.defineProperty(QfFieldComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.templateOptions ? this.field.templateOptions.label : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QfFieldComponent.prototype, "componentType", {
        get: /**
         * @return {?}
         */
        function () {
            this.fieldTypesMap = new QfFieldTypesMap(QfBaseFieldTypesMap);
            return this.fieldTypesMap.fieldMapFn(this.field.type);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    QfFieldComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var componentFactory = this.cfr.resolveComponentFactory(this.componentType);
        this.componentContainerRef.clear();
        this.componentRef = this.componentContainerRef.createComponent(componentFactory);
        /** @type {?} */
        var instance = this.componentRef.instance;
        Object.assign(instance, { field: this.field });
        this.componentRef.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    QfFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    QfFieldComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentRef.destroy();
    };
    QfFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qf-field',
                    template: "<div class=\"qf-field-item\">\n  <div *ngIf=\"label\" class=\"qf-field-label\">\n    <label>{{ label }}</label>\n  </div>\n  <ng-template #componentContainer></ng-template>\n</div>",
                    styles: [".qf-field-item{margin-bottom:16px}.qf-field-label{font-size:14px;font-weight:500;padding:0 0 5px}"]
                }] }
    ];
    /** @nocollapse */
    QfFieldComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    QfFieldComponent.propDecorators = {
        field: [{ type: Input }],
        componentContainerRef: [{ type: ViewChild, args: ['componentContainer', { read: ViewContainerRef, static: true },] }]
    };
    return QfFieldComponent;
}());
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
var FieldTypesModule = /** @class */ (function () {
    function FieldTypesModule() {
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
    return FieldTypesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/form-builder.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QfFormBuilderService = /** @class */ (function () {
    function QfFormBuilderService() {
    }
    /**
     * @param {?} form
     * @param {?} fields
     * @return {?}
     */
    QfFormBuilderService.prototype.buildForm = /**
     * @param {?} form
     * @param {?} fields
     * @return {?}
     */
    function (form, fields) {
        var _this = this;
        fields.forEach((/**
         * @param {?} fieldConfig
         * @return {?}
         */
        function (fieldConfig) {
            _this.registerControl(form, fieldConfig);
        }));
    };
    /**
     * @private
     * @param {?} form
     * @param {?} fieldConfig
     * @return {?}
     */
    QfFormBuilderService.prototype.registerControl = /**
     * @private
     * @param {?} form
     * @param {?} fieldConfig
     * @return {?}
     */
    function (form, fieldConfig) {
        var key = fieldConfig.key, templateOptions = fieldConfig.templateOptions;
        var defaultValue = templateOptions.defaultValue, options = templateOptions.options;
        /** @type {?} */
        var control = new FormControl(defaultValue || options);
        fieldConfig.formControl = control;
        form.registerControl(key, control);
    };
    QfFormBuilderService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    QfFormBuilderService.ctorParameters = function () { return []; };
    /** @nocollapse */ QfFormBuilderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function QfFormBuilderService_Factory() { return new QfFormBuilderService(); }, token: QfFormBuilderService, providedIn: "root" });
    return QfFormBuilderService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FORMULA_REX = /#.+?\$/g;
/**
 * @param {?} formula
 * @param {?} fileds
 * @return {?}
 */
function getFormulaTriggerKeys(formula, fileds) {
    /** @type {?} */
    var relatedFields = [];
    if (!formula.match(FORMULA_REX)) {
        return [];
    }
    formula.match(FORMULA_REX).forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _a = __read(item.substring(1, item.indexOf('$')).split('.'), 1), key = _a[0];
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
    var parsedFormula = formula.replace(FORMULA_REX, (/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _a = __read(item.substring(1, item.indexOf('$')).split('.'), 1), key = _a[0];
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
var QfFormComponent = /** @class */ (function () {
    function QfFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.controlChangeSubs = [];
        this.triggerMap = new Map();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    QfFormComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.controlChangeSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        function (sub) { return sub.unsubscribe(); }));
        this.formBuilder.buildForm(this.form, this.fields);
        this.setTriggerMap();
        this.trackControlChanges();
    };
    /**
     * @return {?}
     */
    QfFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    QfFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.controlChangeSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        function (sub) { return sub.unsubscribe(); }));
        this.controlChangeSubs = [];
        this.triggerMap.clear();
    };
    /**
     * @private
     * @return {?}
     */
    QfFormComponent.prototype.setTriggerMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            var templateOptions = field.templateOptions;
            var formula = templateOptions.formula;
            if (formula) {
                /** @type {?} */
                var triggerKeys = getFormulaTriggerKeys(formula, _this.fields);
                triggerKeys.forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (!_this.triggerMap.has(key)) {
                        _this.triggerMap.set(key, []);
                    }
                    _this.triggerMap.get(key).push(field);
                }));
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    QfFormComponent.prototype.trackControlChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            var formControl = field.formControl, key = field.key;
            /** @type {?} */
            var valueChanges = formControl.valueChanges;
            _this.controlChangeSubs.push(valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (_this.triggerMap.has(key)) {
                    _this.handleTrigger(_this.triggerMap.get(key));
                }
            })));
        }));
    };
    /**
     * @private
     * @param {?} targetFields
     * @return {?}
     */
    QfFormComponent.prototype.handleTrigger = /**
     * @private
     * @param {?} targetFields
     * @return {?}
     */
    function (targetFields) {
        var _this = this;
        targetFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            var key = field.key, templateOptions = field.templateOptions;
            var valueType = templateOptions.valueType, formula = templateOptions.formula;
            if (valueType === 'formula') {
                /** @type {?} */
                var calcValue = calculateFormula(formula, _this.form);
                _this.form.get(key).setValue(calcValue);
            }
        }));
    };
    QfFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qf-form',
                    template: "<ng-container *ngFor=\"let field of fields\">\r\n  <qf-field [field]=\"field\"></qf-field>\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    QfFormComponent.ctorParameters = function () { return [
        { type: QfFormBuilderService }
    ]; };
    QfFormComponent.propDecorators = {
        fields: [{ type: Input }],
        form: [{ type: Input }]
    };
    return QfFormComponent;
}());
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
var QingFormModule = /** @class */ (function () {
    function QingFormModule() {
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
    return QingFormModule;
}());

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
