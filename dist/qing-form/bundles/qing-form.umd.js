(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('ng-zorro-antd'), require('@angular/forms'), require('formula-calculator')) :
    typeof define === 'function' && define.amd ? define('qing-form', ['exports', '@angular/common', '@angular/core', 'ng-zorro-antd', '@angular/forms', 'formula-calculator'], factory) :
    (global = global || self, factory(global['qing-form'] = {}, global.ng.common, global.ng.core, global.ngZorroAntd, global.ng.forms, global.formulaCalculator));
}(this, (function (exports, common, core, ngZorroAntd, forms, formulaCalculator) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            field: [{ type: core.Input }]
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: 'qf-field',
                        template: "<div class=\"qf-field-item\">\n  <div *ngIf=\"label\" class=\"qf-field-label\">\n    <label>{{ label }}</label>\n  </div>\n  <ng-template #componentContainer></ng-template>\n</div>",
                        styles: [".qf-field-item{margin-bottom:16px}.qf-field-label{font-size:14px;font-weight:500;padding:0 0 5px}"]
                    }] }
        ];
        /** @nocollapse */
        QfFieldComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver }
        ]; };
        QfFieldComponent.propDecorators = {
            field: [{ type: core.Input }],
            componentContainerRef: [{ type: core.ViewChild, args: ['componentContainer', { read: core.ViewContainerRef, static: true },] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            ngZorroAntd.NgZorroAntdModule,
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule
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
            var control = new forms.FormControl(defaultValue || options);
            fieldConfig.formControl = control;
            form.registerControl(key, control);
        };
        QfFormBuilderService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        QfFormBuilderService.ctorParameters = function () { return []; };
        /** @nocollapse */ QfFormBuilderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function QfFormBuilderService_Factory() { return new QfFormBuilderService(); }, token: QfFormBuilderService, providedIn: "root" });
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
            return formulaCalculator.calculate(parsedFormula);
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
            { type: core.Component, args: [{
                        selector: 'qf-form',
                        template: "<ng-container *ngFor=\"let field of fields\">\r\n  <qf-field [field]=\"field\"></qf-field>\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        QfFormComponent.ctorParameters = function () { return [
            { type: QfFormBuilderService }
        ]; };
        QfFormComponent.propDecorators = {
            fields: [{ type: core.Input }],
            form: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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

    exports.QingFormModule = QingFormModule;
    exports.ɵa = FieldTypesModule;
    exports.ɵb = InputComponent;
    exports.ɵc = QfFieldTypeComponent;
    exports.ɵd = CheckboxComponent;
    exports.ɵe = QfFieldComponent;
    exports.ɵf = QfFormComponent;
    exports.ɵg = QfFormBuilderService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=qing-form.umd.js.map
