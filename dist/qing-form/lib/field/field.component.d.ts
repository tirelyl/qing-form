import { OnInit, ViewContainerRef, ComponentFactoryResolver, Type, ComponentRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { QfFieldConfig } from '../definitions/field-config';
import { QfFieldTypesMap } from '../definitions/field-types-map';
export declare class QfFieldComponent implements OnInit, OnChanges, OnDestroy {
    private cfr;
    fieldTypesMap: QfFieldTypesMap;
    componentRef: ComponentRef<any>;
    field: QfFieldConfig;
    componentContainerRef: ViewContainerRef;
    readonly label: string;
    readonly componentType: Type<any>;
    constructor(cfr: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
