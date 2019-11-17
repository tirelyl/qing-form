/**
 * @fileoverview added by tsickle
 * Generated from: lib/field/field.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { QfFieldTypesMap } from '../definitions/field-types-map';
import { QfBaseFieldTypesMap } from '../field-types/base-field-map';
export class QfFieldComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcWluZy1mb3JtLyIsInNvdXJjZXMiOlsibGliL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsS0FBSyxFQU1OLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU9wRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBaUIzQixZQUNVLEdBQTZCO1FBQTdCLFFBQUcsR0FBSCxHQUFHLENBQTBCO0lBQ25DLENBQUM7Ozs7SUFYTCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RSxDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQU1ELFdBQVcsQ0FBQyxPQUFzQjs7Y0FDMUIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7Y0FDM0UsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUTtRQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGdNQUFxQzs7YUFFdEM7Ozs7WUFoQkMsd0JBQXdCOzs7b0JBcUJ2QixLQUFLO29DQUVMLFNBQVMsU0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBTHpFLHlDQUErQjs7SUFDL0Isd0NBQWdDOztJQUVoQyxpQ0FBOEI7O0lBRTlCLGlEQUFtSDs7Ozs7SUFZakgsK0JBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbnB1dCxcbiAgVHlwZSxcbiAgQ29tcG9uZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFFmRmllbGRDb25maWcsIFFmRmllbGRUeXBlIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMvZmllbGQtY29uZmlnJztcbmltcG9ydCB7IFFmRmllbGRUeXBlc01hcCB9IGZyb20gJy4uL2RlZmluaXRpb25zL2ZpZWxkLXR5cGVzLW1hcCc7XG5pbXBvcnQgeyBRZkJhc2VGaWVsZFR5cGVzTWFwIH0gZnJvbSAnLi4vZmllbGQtdHlwZXMvYmFzZS1maWVsZC1tYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxZi1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpZWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUWZGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBmaWVsZFR5cGVzTWFwOiBRZkZpZWxkVHlwZXNNYXA7XG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgQElucHV0KCkgZmllbGQ6IFFmRmllbGRDb25maWc7XG5cbiAgQFZpZXdDaGlsZCgnY29tcG9uZW50Q29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgY29tcG9uZW50Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucyA/IHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zLmxhYmVsIDogJyc7XG4gIH1cblxuICBnZXQgY29tcG9uZW50VHlwZSgpOiBUeXBlPGFueT4ge1xuICAgIHRoaXMuZmllbGRUeXBlc01hcCA9IG5ldyBRZkZpZWxkVHlwZXNNYXAoUWZCYXNlRmllbGRUeXBlc01hcCk7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRUeXBlc01hcC5maWVsZE1hcEZuKHRoaXMuZmllbGQudHlwZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbXBvbmVudFR5cGUpO1xuICAgIHRoaXMuY29tcG9uZW50Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudENvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7IGZpZWxkOiB0aGlzLmZpZWxkIH0pO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICB9XG5cbn1cbiJdfQ==