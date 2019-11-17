/**
 * @fileoverview added by tsickle
 * Generated from: lib/field/field.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { QfFieldTypesMap } from '../definitions/field-types-map';
import { QfBaseFieldTypesMap } from '../field-types/base-field-map';
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
export { QfFieldComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcWluZy1mb3JtLyIsInNvdXJjZXMiOlsibGliL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsS0FBSyxFQU1OLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRTtJQXNCRSwwQkFDVSxHQUE2QjtRQUE3QixRQUFHLEdBQUgsR0FBRyxDQUEwQjtJQUNuQyxDQUFDO0lBWEwsc0JBQUksbUNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQWE7Ozs7UUFBakI7WUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDOUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELENBQUM7OztPQUFBOzs7OztJQU1ELHNDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjs7WUFDMUIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7WUFDM0UsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUTtRQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixnTUFBcUM7O2lCQUV0Qzs7OztnQkFoQkMsd0JBQXdCOzs7d0JBcUJ2QixLQUFLO3dDQUVMLFNBQVMsU0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQStCM0UsdUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXJDWSxnQkFBZ0I7OztJQUMzQix5Q0FBK0I7O0lBQy9CLHdDQUFnQzs7SUFFaEMsaUNBQThCOztJQUU5QixpREFBbUg7Ozs7O0lBWWpILCtCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5wdXQsXG4gIFR5cGUsXG4gIENvbXBvbmVudFJlZixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBRZkZpZWxkQ29uZmlnLCBRZkZpZWxkVHlwZSB9IGZyb20gJy4uL2RlZmluaXRpb25zL2ZpZWxkLWNvbmZpZyc7XG5pbXBvcnQgeyBRZkZpZWxkVHlwZXNNYXAgfSBmcm9tICcuLi9kZWZpbml0aW9ucy9maWVsZC10eXBlcy1tYXAnO1xuaW1wb3J0IHsgUWZCYXNlRmllbGRUeXBlc01hcCB9IGZyb20gJy4uL2ZpZWxkLXR5cGVzL2Jhc2UtZmllbGQtbWFwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncWYtZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWVsZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFFmRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgZmllbGRUeXBlc01hcDogUWZGaWVsZFR5cGVzTWFwO1xuICBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIGZpZWxkOiBRZkZpZWxkQ29uZmlnO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbXBvbmVudENvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGNvbXBvbmVudENvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMgPyB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucy5sYWJlbCA6ICcnO1xuICB9XG5cbiAgZ2V0IGNvbXBvbmVudFR5cGUoKTogVHlwZTxhbnk+IHtcbiAgICB0aGlzLmZpZWxkVHlwZXNNYXAgPSBuZXcgUWZGaWVsZFR5cGVzTWFwKFFmQmFzZUZpZWxkVHlwZXNNYXApO1xuICAgIHJldHVybiB0aGlzLmZpZWxkVHlwZXNNYXAuZmllbGRNYXBGbih0aGlzLmZpZWxkLnR5cGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICApIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb21wb25lbnRUeXBlKTtcbiAgICB0aGlzLmNvbXBvbmVudENvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwgeyBmaWVsZDogdGhpcy5maWVsZCB9KTtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgfVxuXG59XG4iXX0=