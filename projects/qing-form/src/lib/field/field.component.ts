import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input,
  Type,
  ComponentRef,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { QfFieldConfig } from '../definitions/field-config';
import { QfFieldTypesMap } from '../definitions/field-types-map';
import { QfBaseFieldTypesMap } from '../field-types/base-field-map';

@Component({
  selector: 'qf-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class QfFieldComponent implements OnInit, OnChanges, OnDestroy {
  fieldTypesMap: QfFieldTypesMap;
  componentRef: ComponentRef<any>;

  @Input() field: QfFieldConfig;

  @ViewChild('componentContainer', { read: ViewContainerRef, static: true }) componentContainerRef: ViewContainerRef;

  get label(): string {
    return this.field.templateOptions ? this.field.templateOptions.label : '';
  }

  get componentType(): Type<any> {
    this.fieldTypesMap = new QfFieldTypesMap(QfBaseFieldTypesMap);
    return this.fieldTypesMap.fieldMapFn(this.field.type);
  }

  constructor(
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const componentFactory = this.cfr.resolveComponentFactory(this.componentType);
    this.componentContainerRef.clear();
    this.componentRef = this.componentContainerRef.createComponent(componentFactory);
    const instance = this.componentRef.instance;
    Object.assign(instance, { field: this.field });
    this.componentRef.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }

}
