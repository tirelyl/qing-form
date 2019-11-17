/**
 * @fileoverview added by tsickle
 * Generated from: lib/form/form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QfFormBuilderService } from '../services/form-builder.service';
import { getFormulaTriggerKeys, calculateFormula } from '../utils';
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
export { QfFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9xaW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvZm9ybS9mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRW5FO0lBV0UseUJBQ1UsV0FBaUM7UUFBakMsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBSm5DLHNCQUFpQixHQUFtQixFQUFFLENBQUM7UUFDdkMsZUFBVSxHQUFJLElBQUksR0FBRyxFQUEyQixDQUFDO0lBSXJELENBQUM7Ozs7O0lBRUwscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQWpCLENBQWlCLEVBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixFQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sdUNBQWE7Ozs7SUFBckI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsS0FBSztZQUNmLElBQUEsdUNBQWU7WUFDZixJQUFBLGlDQUFPO1lBQ2YsSUFBSSxPQUFPLEVBQUU7O29CQUNMLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQztnQkFDL0QsV0FBVyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxHQUFHO29CQUNyQixJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDOUI7b0JBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLEVBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLDZDQUFtQjs7OztJQUEzQjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2YsSUFBQSwrQkFBVyxFQUFFLGVBQUc7O2dCQUNsQixZQUFZLEdBQUcsV0FBVyxDQUFDLFlBQVk7WUFDN0MsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsS0FBSztnQkFDdEQsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM5QztZQUNILENBQUMsRUFBQyxDQUFDLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLHVDQUFhOzs7OztJQUFyQixVQUFzQixZQUE2QjtRQUFuRCxpQkFTQztRQVJDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2hCLElBQUEsZUFBRyxFQUFFLHVDQUFlO1lBQ3BCLElBQUEscUNBQVMsRUFBRSxpQ0FBTztZQUMxQixJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7O29CQUNyQixTQUFTLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3RELEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN4QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIseUhBQW9DO2lCQUNyQzs7OztnQkFOUSxvQkFBb0I7Ozt5QkFRMUIsS0FBSzt1QkFDTCxLQUFLOztJQWdFUixzQkFBQztDQUFBLEFBdEVELElBc0VDO1NBbEVZLGVBQWU7OztJQUMxQixpQ0FBaUM7O0lBQ2pDLCtCQUF5Qjs7Ozs7SUFFekIsNENBQStDOzs7OztJQUMvQyxxQ0FBeUQ7Ozs7O0lBR3ZELHNDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUWZGaWVsZENvbmZpZyB9IGZyb20gJy4uL2RlZmluaXRpb25zL2ZpZWxkLWNvbmZpZyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFFmRm9ybUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZm9ybS1idWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBnZXRGb3JtdWxhVHJpZ2dlcktleXMsIGNhbGN1bGF0ZUZvcm11bGEgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3FmLWZvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUWZGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgZmllbGRzOiBRZkZpZWxkQ29uZmlnW107XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBwcml2YXRlIGNvbnRyb2xDaGFuZ2VTdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIHByaXZhdGUgdHJpZ2dlck1hcCA9ICBuZXcgTWFwPHN0cmluZywgUWZGaWVsZENvbmZpZ1tdPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IFFmRm9ybUJ1aWxkZXJTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sQ2hhbmdlU3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XHJcbiAgICB0aGlzLmZvcm1CdWlsZGVyLmJ1aWxkRm9ybSh0aGlzLmZvcm0sIHRoaXMuZmllbGRzKTtcclxuICAgIHRoaXMuc2V0VHJpZ2dlck1hcCgpO1xyXG4gICAgdGhpcy50cmFja0NvbnRyb2xDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sQ2hhbmdlU3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XHJcbiAgICB0aGlzLmNvbnRyb2xDaGFuZ2VTdWJzID0gW107XHJcbiAgICB0aGlzLnRyaWdnZXJNYXAuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VHJpZ2dlck1hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb25zdCB7IHRlbXBsYXRlT3B0aW9ucyB9ID0gZmllbGQ7XHJcbiAgICAgIGNvbnN0IHsgZm9ybXVsYSB9ID0gdGVtcGxhdGVPcHRpb25zO1xyXG4gICAgICBpZiAoZm9ybXVsYSkge1xyXG4gICAgICAgIGNvbnN0IHRyaWdnZXJLZXlzID0gZ2V0Rm9ybXVsYVRyaWdnZXJLZXlzKGZvcm11bGEsIHRoaXMuZmllbGRzKTtcclxuICAgICAgICB0cmlnZ2VyS2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMudHJpZ2dlck1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJNYXAuc2V0KGtleSwgW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy50cmlnZ2VyTWFwLmdldChrZXkpLnB1c2goZmllbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhY2tDb250cm9sQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb25zdCB7IGZvcm1Db250cm9sLCBrZXkgfSA9IGZpZWxkO1xyXG4gICAgICBjb25zdCB2YWx1ZUNoYW5nZXMgPSBmb3JtQ29udHJvbC52YWx1ZUNoYW5nZXM7XHJcbiAgICAgIHRoaXMuY29udHJvbENoYW5nZVN1YnMucHVzaCh2YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICBpZiAodGhpcy50cmlnZ2VyTWFwLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZVRyaWdnZXIodGhpcy50cmlnZ2VyTWFwLmdldChrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVUcmlnZ2VyKHRhcmdldEZpZWxkczogUWZGaWVsZENvbmZpZ1tdKTogdm9pZCB7XHJcbiAgICB0YXJnZXRGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGNvbnN0IHsga2V5LCB0ZW1wbGF0ZU9wdGlvbnMgfSA9IGZpZWxkO1xyXG4gICAgICBjb25zdCB7IHZhbHVlVHlwZSwgZm9ybXVsYSB9ID0gdGVtcGxhdGVPcHRpb25zO1xyXG4gICAgICBpZiAodmFsdWVUeXBlID09PSAnZm9ybXVsYScpIHtcclxuICAgICAgICBjb25zdCBjYWxjVmFsdWUgPSBjYWxjdWxhdGVGb3JtdWxhKGZvcm11bGEsIHRoaXMuZm9ybSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLmdldChrZXkpLnNldFZhbHVlKGNhbGNWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19