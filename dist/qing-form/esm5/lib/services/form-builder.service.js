/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/form-builder.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ QfFormBuilderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function QfFormBuilderService_Factory() { return new QfFormBuilderService(); }, token: QfFormBuilderService, providedIn: "root" });
    return QfFormBuilderService;
}());
export { QfFormBuilderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9xaW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm9ybS1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHeEQ7SUFFRTtJQUFlLENBQUM7Ozs7OztJQUVoQix3Q0FBUzs7Ozs7SUFBVCxVQUFVLElBQWUsRUFBRSxNQUF1QjtRQUFsRCxpQkFJQztRQUhDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxXQUFXO1lBQ3hCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLDhDQUFlOzs7Ozs7SUFBdkIsVUFBd0IsSUFBZSxFQUFFLFdBQTBCO1FBQ3pELElBQUEscUJBQUcsRUFBRSw2Q0FBZTtRQUNwQixJQUFBLDJDQUFZLEVBQUUsaUNBQU87O1lBQ3ZCLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDO1FBQ3hELFdBQVcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQWhCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzsrQkFKbEM7Q0FxQkMsQUFqQkQsSUFpQkM7U0FoQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBRZkZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMvZmllbGQtY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBRZkZvcm1CdWlsZGVyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBidWlsZEZvcm0oZm9ybTogRm9ybUdyb3VwLCBmaWVsZHM6IFFmRmllbGRDb25maWdbXSk6IHZvaWQge1xyXG4gICAgZmllbGRzLmZvckVhY2goZmllbGRDb25maWcgPT4ge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbChmb3JtLCBmaWVsZENvbmZpZyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJDb250cm9sKGZvcm06IEZvcm1Hcm91cCwgZmllbGRDb25maWc6IFFmRmllbGRDb25maWcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsga2V5LCB0ZW1wbGF0ZU9wdGlvbnMgfSA9IGZpZWxkQ29uZmlnO1xyXG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIG9wdGlvbnMgfSA9IHRlbXBsYXRlT3B0aW9ucztcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZGVmYXVsdFZhbHVlIHx8IG9wdGlvbnMpO1xyXG4gICAgZmllbGRDb25maWcuZm9ybUNvbnRyb2wgPSBjb250cm9sO1xyXG4gICAgZm9ybS5yZWdpc3RlckNvbnRyb2woa2V5LCBjb250cm9sKTtcclxuICB9XHJcbn1cclxuIl19