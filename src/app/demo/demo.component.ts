import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
import { QfFieldConfig } from 'qing-form';
import { CodeEditorComponent } from '../editor/code-editor.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() fields: QfFieldConfig[];

  col = 8;
  id = -1;
  code: string;
  @ViewChild(CodeEditorComponent, { static: true }) editor: CodeEditorComponent;

  onResize({ col }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.col = col;
      this.editor.layout();
    });
  }

  log(): void {
    alert(JSON.stringify(this.form.value, undefined, 4));
  }

  update(): void {
    this.form = new FormGroup({});
    this.fields = JSON.parse(this.code);
  }

  constructor() { }

  ngOnInit() {
    this.code = JSON.stringify(this.fields, undefined, 4);
  }

}
