# QingForm 📃
QingForm 是一个用于 Angular 动态创建表单的库，JSON配置，支持字段间的灵活联动
GitHub 地址：[https://github.com/tirelyl/qing-form](https://github.com/tirelyl/qing-form)

## 如何使用

1. 安装 qing-form

```bash
npm install qing-form --save
```

1. 导入 QingFormModule

```ts
import { NgModule } from '@angular/core';
import { QingFormModule } from 'qing-form';

@NgModule({
  imports: [
    ...,
    QingFormModule,
  ]
})
export class ShareModule { }
```

1. 在组件中使用JSON来配置表单

```ts
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QfFieldConfig } from 'qing-form';

@Component({
  selector: 'app',
  template: `
    <form [formGroup]="form">
      <qf-form [form]="form" [fields]="fields"></qf-form>
    </form>
  `
})
export class AppComponent {
  form = new FormGroup({});
  fields: QfFieldConfig[] = [
    {
      key: '1',
      type: 'input',
      templateOptions: {
        label: '输入框',
        placeholder: '我是提示'
      }
    }
  ];
}
```

## API
```html
<qf-form [form]="form" [fields]="fields"></qf-form>
```

### qf-form

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[form]` | 当前表单的 FormGroup 实例 | `Array<TemplateRef<void>>` | `new FormGroup({})` |
| `fields` | 每一个表单控件的配置信息 | `QfFieldConfig` | `[]` |

### QfFieldConfig

| 属性 | 说明 | 类型 | 必填 |
| -------- | ----------- | ---- | ------- |
| `key` | 表单控件的唯一key，于 FormGroup 中的 key 对应 | `string` | ✅ |
| `type` | 表单控件类型 | `'input' \| 'date' \| 'radio' \| 'checkbox'` | ✅ |
| `templateOptions` | 给控件设置交互相关的信息 | `QfTemplateOptions` | - |


### QfTemplateOptions

| 属性 | 说明 | 类型 | 必填 |
| -------- | ----------- | ---- | ------- |
| `label` | 控件标题 | `string` | - |
| `placeholder` | 控件默认文字 | `string` | - |
| `defaultValue` | 控件默认值 | `any` | - |
| `options` | 选择类型控件选项 | `Array<{ label: string; value: string; checked?: boolean; }>` | - |
| `valueType` | 控件值联动类型 | `'string' \| 'formula' \| 'custom'` | - |
| `formula` | 联动值类型为 formula 时，需要计算的公式 | `string` | - |

