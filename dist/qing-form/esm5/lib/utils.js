/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as calculator from 'formula-calculator';
/** @type {?} */
var FORMULA_REX = /#.+?\$/g;
/**
 * @param {?} formula
 * @param {?} fileds
 * @return {?}
 */
export function getFormulaTriggerKeys(formula, fileds) {
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
        var _a = tslib_1.__read(item.substring(1, item.indexOf('$')).split('.'), 1), key = _a[0];
        relatedFields.push(key);
    }));
    return relatedFields;
}
/**
 * @param {?} formula
 * @param {?} form
 * @return {?}
 */
export function calculateFormula(formula, form) {
    /** @type {?} */
    var parsedFormula = formula.replace(FORMULA_REX, (/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _a = tslib_1.__read(item.substring(1, item.indexOf('$')).split('.'), 1), key = _a[0];
        return form.get(key).value;
    }));
    try {
        return calculator.calculate(parsedFormula);
    }
    catch (error) {
        console.error(error);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9xaW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFHM0MsV0FBVyxHQUFHLFNBQVM7Ozs7OztBQUU3QixNQUFNLFVBQVUscUJBQXFCLENBQUMsT0FBZSxFQUFFLE1BQXVCOztRQUN0RSxhQUFhLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUMvQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxJQUFJO1FBQy9CLElBQUEsdUVBQXVELEVBQXRELFdBQXNEO1FBQzdELGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDSCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLElBQWU7O1FBQ3pELGFBQWEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVc7Ozs7SUFBRSxVQUFBLElBQUk7UUFDL0MsSUFBQSx1RUFBdUQsRUFBdEQsV0FBc0Q7UUFDN0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDLEVBQUM7SUFDRixJQUFJO1FBQ0YsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzVDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0ICogYXMgY2FsY3VsYXRvciBmcm9tICdmb3JtdWxhLWNhbGN1bGF0b3InO1xyXG5pbXBvcnQgeyBRZkZpZWxkQ29uZmlnIH0gZnJvbSAnLi9kZWZpbml0aW9ucy9maWVsZC1jb25maWcnO1xyXG5cclxuY29uc3QgRk9STVVMQV9SRVggPSAvIy4rP1xcJC9nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm11bGFUcmlnZ2VyS2V5cyhmb3JtdWxhOiBzdHJpbmcsIGZpbGVkczogUWZGaWVsZENvbmZpZ1tdKTogc3RyaW5nW10ge1xyXG4gIGNvbnN0IHJlbGF0ZWRGaWVsZHMgPSBbXTtcclxuICBpZiAoIWZvcm11bGEubWF0Y2goRk9STVVMQV9SRVgpKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGZvcm11bGEubWF0Y2goRk9STVVMQV9SRVgpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBjb25zdCBba2V5XSA9IGl0ZW0uc3Vic3RyaW5nKDEsIGl0ZW0uaW5kZXhPZignJCcpKS5zcGxpdCgnLicpO1xyXG4gICAgcmVsYXRlZEZpZWxkcy5wdXNoKGtleSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlbGF0ZWRGaWVsZHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVGb3JtdWxhKGZvcm11bGE6IHN0cmluZywgZm9ybTogRm9ybUdyb3VwKTogYW55IHtcclxuICBjb25zdCBwYXJzZWRGb3JtdWxhID0gZm9ybXVsYS5yZXBsYWNlKEZPUk1VTEFfUkVYLCBpdGVtID0+IHtcclxuICAgIGNvbnN0IFtrZXldID0gaXRlbS5zdWJzdHJpbmcoMSwgaXRlbS5pbmRleE9mKCckJykpLnNwbGl0KCcuJyk7XHJcbiAgICByZXR1cm4gZm9ybS5nZXQoa2V5KS52YWx1ZTtcclxuICB9KTtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGNhbGN1bGF0b3IuY2FsY3VsYXRlKHBhcnNlZEZvcm11bGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn1cclxuIl19