/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/form-builder.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export class QfFormBuilderService {
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
/** @nocollapse */ QfFormBuilderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function QfFormBuilderService_Factory() { return new QfFormBuilderService(); }, token: QfFormBuilderService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9xaW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm9ybS1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJeEQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixnQkFBZSxDQUFDOzs7Ozs7SUFFaEIsU0FBUyxDQUFDLElBQWUsRUFBRSxNQUF1QjtRQUNoRCxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLGVBQWUsQ0FBQyxJQUFlLEVBQUUsV0FBMEI7Y0FDM0QsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLEdBQUcsV0FBVztjQUN0QyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsR0FBRyxlQUFlOztjQUMzQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQztRQUN4RCxXQUFXLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFoQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUWZGaWVsZENvbmZpZyB9IGZyb20gJy4uL2RlZmluaXRpb25zL2ZpZWxkLWNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgUWZGb3JtQnVpbGRlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgYnVpbGRGb3JtKGZvcm06IEZvcm1Hcm91cCwgZmllbGRzOiBRZkZpZWxkQ29uZmlnW10pOiB2b2lkIHtcclxuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkQ29uZmlnID0+IHtcclxuICAgICAgdGhpcy5yZWdpc3RlckNvbnRyb2woZm9ybSwgZmllbGRDb25maWcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyQ29udHJvbChmb3JtOiBGb3JtR3JvdXAsIGZpZWxkQ29uZmlnOiBRZkZpZWxkQ29uZmlnKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGtleSwgdGVtcGxhdGVPcHRpb25zIH0gPSBmaWVsZENvbmZpZztcclxuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBvcHRpb25zIH0gPSB0ZW1wbGF0ZU9wdGlvbnM7XHJcbiAgICBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKGRlZmF1bHRWYWx1ZSB8fCBvcHRpb25zKTtcclxuICAgIGZpZWxkQ29uZmlnLmZvcm1Db250cm9sID0gY29udHJvbDtcclxuICAgIGZvcm0ucmVnaXN0ZXJDb250cm9sKGtleSwgY29udHJvbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==