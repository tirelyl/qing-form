import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { QingFormModule } from 'qing-form';
import { CodeEditorModule } from '../editor/code-editor.module';
import { DemoComponent } from '../demo/demo.component';

@NgModule({
  imports: [
    CommonModule,
    QingFormModule,
    ReactiveFormsModule,
    FormsModule,
    CodeEditorModule,
    // third lib
    NgZorroAntdModule,
    NzResizableModule
  ],
  exports: [
    CommonModule,
    QingFormModule,
    ReactiveFormsModule,
    FormsModule,
    CodeEditorModule,
    // third lib
    NgZorroAntdModule,
    NzResizableModule,
    // components
    DemoComponent
  ],
  declarations: [
    DemoComponent
  ]
})
export class ShareModule { }
