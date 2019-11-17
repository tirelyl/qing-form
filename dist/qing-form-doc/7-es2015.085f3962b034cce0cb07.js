(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3Ed4":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class b{}var o=u("pMnS");class e{constructor(){}ngOnInit(){}}var d=t.rb({encapsulation:0,styles:[[""]],data:{}});function r(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"h1",[["id","qingform"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["QingForm \u{1f4c3}"])),(l()(),t.tb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["QingForm \u662f\u4e00\u4e2a\u7528\u4e8e Angular \u52a8\u6001\u521b\u5efa\u8868\u5355\u7684\u5e93\uff0cJSON\u914d\u7f6e\uff0c\u652f\u6301\u5b57\u6bb5\u95f4\u7684\u7075\u6d3b\u8054\u52a8"])),(l()(),t.tb(4,0,null,null,1,"h2",[["id",""]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u5982\u4f55\u4f7f\u7528"])),(l()(),t.tb(6,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u5b89\u88c5 qing-form"])),(l()(),t.tb(9,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,1,"code",[["class","bash language-bash"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["npm install qing-form --save\n"])),(l()(),t.tb(12,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),t.tb(13,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u5bfc\u5165 QingFormModule"])),(l()(),t.tb(15,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,1,"code",[["class","ts language-ts"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["import { NgModule } from '@angular/core';\nimport { QingFormModule } from 'qing-form';\n\n@NgModule({\n  imports: [\n    ...,\n    QingFormModule,\n  ]\n})\nexport class ShareModule { }\n"])),(l()(),t.tb(18,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),t.tb(19,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528JSON\u6765\u914d\u7f6e\u8868\u5355"])),(l()(),t.tb(21,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,1,"code",[["class","ts language-ts"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["import { Component, OnInit } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { QfFieldConfig } from 'qing-form';\n\n@Component({\n  selector: 'app',\n  template: `\n    <form [formGroup]=\"form\">\n      <qf-form [form]=\"form\" [fields]=\"fields\"></qf-form>\n    </form>\n  `\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  fields: QfFieldConfig[] = [\n    {\n      key: '1',\n      type: 'input',\n      templateOptions: {\n        label: '\u8f93\u5165\u6846',\n        placeholder: '\u6211\u662f\u63d0\u793a'\n      }\n    }\n  ];\n}\n"])),(l()(),t.tb(24,0,null,null,1,"h2",[["id","api"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["API"])),(l()(),t.tb(26,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),t.tb(27,0,null,null,1,"code",[["class","html language-html"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,['<qf-form [form]="form" [fields]="fields"></qf-form>\n'])),(l()(),t.tb(29,0,null,null,1,"h3",[["id","qfform"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["qf-form"])),(l()(),t.tb(31,0,null,null,35,"table",[],null,null,null,null,null)),(l()(),t.tb(32,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.tb(33,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.tb(34,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u53c2\u6570"])),(l()(),t.tb(36,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u8bf4\u660e"])),(l()(),t.tb(38,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u7c7b\u578b"])),(l()(),t.tb(40,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u9ed8\u8ba4\u503c"])),(l()(),t.tb(42,0,null,null,24,"tbody",[],null,null,null,null,null)),(l()(),t.tb(43,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t.tb(44,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(45,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["[form]"])),(l()(),t.tb(47,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u5f53\u524d\u8868\u5355\u7684 FormGroup \u5b9e\u4f8b"])),(l()(),t.tb(49,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(50,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Array<TemplateRef<void>>"])),(l()(),t.tb(52,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(53,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["new FormGroup({})"])),(l()(),t.tb(55,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t.tb(56,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(57,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["fields"])),(l()(),t.tb(59,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u6bcf\u4e00\u4e2a\u8868\u5355\u63a7\u4ef6\u7684\u914d\u7f6e\u4fe1\u606f"])),(l()(),t.tb(61,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(62,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["QfFieldConfig"])),(l()(),t.tb(64,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(65,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["[]"])),(l()(),t.tb(67,0,null,null,1,"h3",[["id","qffieldconfig"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["QfFieldConfig"])),(l()(),t.tb(69,0,null,null,44,"table",[],null,null,null,null,null)),(l()(),t.tb(70,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.tb(71,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.tb(72,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u5c5e\u6027"])),(l()(),t.tb(74,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u8bf4\u660e"])),(l()(),t.tb(76,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u7c7b\u578b"])),(l()(),t.tb(78,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u5fc5\u586b"])),(l()(),t.tb(80,0,null,null,33,"tbody",[],null,null,null,null,null)),(l()(),t.tb(81,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.tb(82,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(83,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["key"])),(l()(),t.tb(85,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u8868\u5355\u63a7\u4ef6\u7684\u552f\u4e00key\uff0c\u4e8e FormGroup \u4e2d\u7684 key \u5bf9\u5e94"])),(l()(),t.tb(87,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(88,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["string"])),(l()(),t.tb(90,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u2705"])),(l()(),t.tb(92,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.tb(93,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(94,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["type"])),(l()(),t.tb(96,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u8868\u5355\u63a7\u4ef6\u7c7b\u578b"])),(l()(),t.tb(98,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(99,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["'input' | 'date' | 'radio' | 'checkbox'"])),(l()(),t.tb(101,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u2705"])),(l()(),t.tb(103,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.tb(104,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(105,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["templateOptions"])),(l()(),t.tb(107,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u7ed9\u63a7\u4ef6\u8bbe\u7f6e\u4ea4\u4e92\u76f8\u5173\u7684\u4fe1\u606f"])),(l()(),t.tb(109,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(110,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["QfTemplateOptions"])),(l()(),t.tb(112,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["-"])),(l()(),t.tb(114,0,null,null,1,"h3",[["id","qftemplateoptions"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["QfTemplateOptions"])),(l()(),t.tb(116,0,null,null,77,"table",[],null,null,null,null,null)),(l()(),t.tb(117,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.tb(118,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.tb(119,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u5c5e\u6027"])),(l()(),t.tb(121,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u8bf4\u660e"])),(l()(),t.tb(123,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u7c7b\u578b"])),(l()(),t.tb(125,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u5fc5\u586b"])),(l()(),t.tb(127,0,null,null,66,"tbody",[],null,null,null,null,null)),(l()(),t.tb(128,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.tb(129,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(130,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["label"])),(l()(),t.tb(132,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u63a7\u4ef6\u6807\u9898"])),(l()(),t.tb(134,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(135,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["string"])),(l()(),t.tb(137,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["-"])),(l()(),t.tb(139,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.tb(140,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(141,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["placeholder"])),(l()(),t.tb(143,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u63a7\u4ef6\u9ed8\u8ba4\u6587\u5b57"])),(l()(),t.tb(145,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(146,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["string"])),(l()(),t.tb(148,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["-"])),(l()(),t.tb(150,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.tb(151,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(152,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["defaultValue"])),(l()(),t.tb(154,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u63a7\u4ef6\u9ed8\u8ba4\u503c"])),(l()(),t.tb(156,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(157,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["any"])),(l()(),t.tb(159,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["-"])),(l()(),t.tb(161,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.tb(162,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(163,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["options"])),(l()(),t.tb(165,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u9009\u62e9\u7c7b\u578b\u63a7\u4ef6\u9009\u9879"])),(l()(),t.tb(167,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(168,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Array<{ label: string; value: string; checked?: boolean; }>"])),(l()(),t.tb(170,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["-"])),(l()(),t.tb(172,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.tb(173,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(174,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["valueType"])),(l()(),t.tb(176,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u63a7\u4ef6\u503c\u8054\u52a8\u7c7b\u578b"])),(l()(),t.tb(178,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(179,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["'string' | 'formula' | 'custom'"])),(l()(),t.tb(181,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["-"])),(l()(),t.tb(183,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.tb(184,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(185,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["formula"])),(l()(),t.tb(187,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["\u8054\u52a8\u503c\u7c7b\u578b\u4e3a formula \u65f6\uff0c\u9700\u8981\u8ba1\u7b97\u7684\u516c\u5f0f"])),(l()(),t.tb(189,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.tb(190,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["string"])),(l()(),t.tb(192,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["-"]))],null,null)}function a(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"app-docs",[["class","markdown"]],null,null,null,r,d)),t.sb(1,114688,null,0,e,[],null,null)],(function(l,n){l(n,1,0)}),null)}var N=t.pb("app-docs",e,a,{},{},[]),i=u("SVse"),c=u("iInd");class f{}u.d(n,"DocsModuleNgFactory",(function(){return s}));var s=t.qb(b,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[o.a,N]],[3,t.j],t.w]),t.Db(4608,i.l,i.k,[t.t,[2,i.E]]),t.Db(1073742336,i.b,i.b,[]),t.Db(1073742336,c.q,c.q,[[2,c.v],[2,c.m]]),t.Db(1073742336,f,f,[]),t.Db(1073742336,b,b,[]),t.Db(1024,c.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);