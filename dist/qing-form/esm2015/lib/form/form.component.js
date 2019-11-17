/**
 * @fileoverview added by tsickle
 * Generated from: lib/form/form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QfFormBuilderService } from '../services/form-builder.service';
import { getFormulaTriggerKeys, calculateFormula } from '../utils';
export class QfFormComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9xaW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvZm9ybS9mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTW5FLE1BQU0sT0FBTyxlQUFlOzs7O0lBTzFCLFlBQ1UsV0FBaUM7UUFBakMsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBSm5DLHNCQUFpQixHQUFtQixFQUFFLENBQUM7UUFDdkMsZUFBVSxHQUFJLElBQUksR0FBRyxFQUEyQixDQUFDO0lBSXJELENBQUM7Ozs7O0lBRUwsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO2tCQUNwQixFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUs7a0JBQzNCLEVBQUUsT0FBTyxFQUFFLEdBQUcsZUFBZTtZQUNuQyxJQUFJLE9BQU8sRUFBRTs7c0JBQ0wsV0FBVyxHQUFHLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMvRCxXQUFXLENBQUMsT0FBTzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQzlCO29CQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxFQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7a0JBQ3BCLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUs7O2tCQUM1QixZQUFZLEdBQUcsV0FBVyxDQUFDLFlBQVk7WUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN6RCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzlDO1lBQ0gsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLFlBQTZCO1FBQ2pELFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7a0JBQ3JCLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUs7a0JBQ2hDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLGVBQWU7WUFDOUMsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFOztzQkFDckIsU0FBUyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDeEM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLHlIQUFvQzthQUNyQzs7OztZQU5RLG9CQUFvQjs7O3FCQVExQixLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixpQ0FBaUM7O0lBQ2pDLCtCQUF5Qjs7Ozs7SUFFekIsNENBQStDOzs7OztJQUMvQyxxQ0FBeUQ7Ozs7O0lBR3ZELHNDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUWZGaWVsZENvbmZpZyB9IGZyb20gJy4uL2RlZmluaXRpb25zL2ZpZWxkLWNvbmZpZyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFFmRm9ybUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBnZXRGb3JtdWxhVHJpZ2dlcktleXMsIGNhbGN1bGF0ZUZvcm11bGEgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3FmLWZvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUWZGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgZmllbGRzOiBRZkZpZWxkQ29uZmlnW107XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBwcml2YXRlIGNvbnRyb2xDaGFuZ2VTdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIHByaXZhdGUgdHJpZ2dlck1hcCA9ICBuZXcgTWFwPHN0cmluZywgUWZGaWVsZENvbmZpZ1tdPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IFFmRm9ybUJ1aWxkZXJTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sQ2hhbmdlU3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XHJcbiAgICB0aGlzLmZvcm1CdWlsZGVyLmJ1aWxkRm9ybSh0aGlzLmZvcm0sIHRoaXMuZmllbGRzKTtcclxuICAgIHRoaXMuc2V0VHJpZ2dlck1hcCgpO1xyXG4gICAgdGhpcy50cmFja0NvbnRyb2xDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sQ2hhbmdlU3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XHJcbiAgICB0aGlzLmNvbnRyb2xDaGFuZ2VTdWJzID0gW107XHJcbiAgICB0aGlzLnRyaWdnZXJNYXAuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VHJpZ2dlck1hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb25zdCB7IHRlbXBsYXRlT3B0aW9ucyB9ID0gZmllbGQ7XHJcbiAgICAgIGNvbnN0IHsgZm9ybXVsYSB9ID0gdGVtcGxhdGVPcHRpb25zO1xyXG4gICAgICBpZiAoZm9ybXVsYSkge1xyXG4gICAgICAgIGNvbnN0IHRyaWdnZXJLZXlzID0gZ2V0Rm9ybXVsYVRyaWdnZXJLZXlzKGZvcm11bGEsIHRoaXMuZmllbGRzKTtcclxuICAgICAgICB0cmlnZ2VyS2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMudHJpZ2dlck1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJNYXAuc2V0KGtleSwgW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy50cmlnZ2VyTWFwLmdldChrZXkpLnB1c2goZmllbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhY2tDb250cm9sQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb25zdCB7IGZvcm1Db250cm9sLCBrZXkgfSA9IGZpZWxkO1xyXG4gICAgICBjb25zdCB2YWx1ZUNoYW5nZXMgPSBmb3JtQ29udHJvbC52YWx1ZUNoYW5nZXM7XHJcbiAgICAgIHRoaXMuY29udHJvbENoYW5nZVN1YnMucHVzaCh2YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICBpZiAodGhpcy50cmlnZ2VyTWFwLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZVRyaWdnZXIodGhpcy50cmlnZ2VyTWFwLmdldChrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVUcmlnZ2VyKHRhcmdldEZpZWxkczogUWZGaWVsZENvbmZpZ1tdKTogdm9pZCB7XHJcbiAgICB0YXJnZXRGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGNvbnN0IHsga2V5LCB0ZW1wbGF0ZU9wdGlvbnMgfSA9IGZpZWxkO1xyXG4gICAgICBjb25zdCB7IHZhbHVlVHlwZSwgZm9ybXVsYSB9ID0gdGVtcGxhdGVPcHRpb25zO1xyXG4gICAgICBpZiAodmFsdWVUeXBlID09PSAnZm9ybXVsYScpIHtcclxuICAgICAgICBjb25zdCBjYWxjVmFsdWUgPSBjYWxjdWxhdGVGb3JtdWxhKGZvcm11bGEsIHRoaXMuZm9ybSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLmdldChrZXkpLnNldFZhbHVlKGNhbGNWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19