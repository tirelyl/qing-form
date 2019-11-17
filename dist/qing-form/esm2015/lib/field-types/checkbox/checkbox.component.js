/**
 * @fileoverview added by tsickle
 * Generated from: lib/field-types/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { QfFieldTypeComponent } from '../../definitions/field-type.component';
export class CheckboxComponent extends QfFieldTypeComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcWluZy1mb3JtLyIsInNvdXJjZXMiOlsibGliL2ZpZWxkLXR5cGVzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFPOUUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG9CQUFvQjtJQUwzRDs7UUFNRSxvQkFBZSxHQUFHO1lBQ2hCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDakQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDaEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7U0FDckMsQ0FBQztJQUdKLENBQUM7Ozs7SUFEQyxRQUFRLEtBQUssQ0FBQzs7O1lBWmYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixpRkFBc0M7YUFDdkM7Ozs7SUFHQyw0Q0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFFmRmllbGRUeXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZGVmaW5pdGlvbnMvZmllbGQtdHlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdxZi1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBleHRlbmRzIFFmRmllbGRUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjaGVja09wdGlvbnNPbmUgPSBbXHJcbiAgICB7IGxhYmVsOiAnQXBwbGUnLCB2YWx1ZTogJ0FwcGxlJywgY2hlY2tlZDogdHJ1ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1BlYXInLCB2YWx1ZTogJ1BlYXInIH0sXHJcbiAgICB7IGxhYmVsOiAnT3JhbmdlJywgdmFsdWU6ICdPcmFuZ2UnIH1cclxuICBdO1xyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG59Il19