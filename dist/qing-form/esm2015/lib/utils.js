/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as calculator from 'formula-calculator';
/** @type {?} */
const FORMULA_REX = /#.+?\$/g;
/**
 * @param {?} formula
 * @param {?} fileds
 * @return {?}
 */
export function getFormulaTriggerKeys(formula, fileds) {
    /** @type {?} */
    const relatedFields = [];
    if (!formula.match(FORMULA_REX)) {
        return [];
    }
    formula.match(FORMULA_REX).forEach((/**
     * @param {?} item
     * @return {?}
     */
    item => {
        const [key] = item.substring(1, item.indexOf('$')).split('.');
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
    const parsedFormula = formula.replace(FORMULA_REX, (/**
     * @param {?} item
     * @return {?}
     */
    item => {
        const [key] = item.substring(1, item.indexOf('$')).split('.');
        return form.get(key).value;
    }));
    try {
        return calculator.calculate(parsedFormula);
    }
    catch (error) {
        console.error(error);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9xaW5nLWZvcm0vIiwic291cmNlcyI6WyJsaWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEtBQUssVUFBVSxNQUFNLG9CQUFvQixDQUFDOztNQUczQyxXQUFXLEdBQUcsU0FBUzs7Ozs7O0FBRTdCLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxPQUFlLEVBQUUsTUFBdUI7O1VBQ3RFLGFBQWEsR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQy9CLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxJQUFJLENBQUMsRUFBRTtjQUNsQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzdELGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDSCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLElBQWU7O1VBQ3pELGFBQWEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVc7Ozs7SUFBRSxJQUFJLENBQUMsRUFBRTtjQUNsRCxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzdELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDN0IsQ0FBQyxFQUFDO0lBQ0YsSUFBSTtRQUNGLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUM1QztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAqIGFzIGNhbGN1bGF0b3IgZnJvbSAnZm9ybXVsYS1jYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgUWZGaWVsZENvbmZpZyB9IGZyb20gJy4vZGVmaW5pdGlvbnMvZmllbGQtY29uZmlnJztcclxuXHJcbmNvbnN0IEZPUk1VTEFfUkVYID0gLyMuKz9cXCQvZztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtdWxhVHJpZ2dlcktleXMoZm9ybXVsYTogc3RyaW5nLCBmaWxlZHM6IFFmRmllbGRDb25maWdbXSk6IHN0cmluZ1tdIHtcclxuICBjb25zdCByZWxhdGVkRmllbGRzID0gW107XHJcbiAgaWYgKCFmb3JtdWxhLm1hdGNoKEZPUk1VTEFfUkVYKSkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBmb3JtdWxhLm1hdGNoKEZPUk1VTEFfUkVYKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgY29uc3QgW2tleV0gPSBpdGVtLnN1YnN0cmluZygxLCBpdGVtLmluZGV4T2YoJyQnKSkuc3BsaXQoJy4nKTtcclxuICAgIHJlbGF0ZWRGaWVsZHMucHVzaChrZXkpO1xyXG4gIH0pO1xyXG4gIHJldHVybiByZWxhdGVkRmllbGRzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRm9ybXVsYShmb3JtdWxhOiBzdHJpbmcsIGZvcm06IEZvcm1Hcm91cCk6IGFueSB7XHJcbiAgY29uc3QgcGFyc2VkRm9ybXVsYSA9IGZvcm11bGEucmVwbGFjZShGT1JNVUxBX1JFWCwgaXRlbSA9PiB7XHJcbiAgICBjb25zdCBba2V5XSA9IGl0ZW0uc3Vic3RyaW5nKDEsIGl0ZW0uaW5kZXhPZignJCcpKS5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIGZvcm0uZ2V0KGtleSkudmFsdWU7XHJcbiAgfSk7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBjYWxjdWxhdG9yLmNhbGN1bGF0ZShwYXJzZWRGb3JtdWxhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==