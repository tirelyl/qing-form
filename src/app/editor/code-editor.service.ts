/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { of as observableOf, BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { PREFIX } from 'ng-zorro-antd/core';
import {
  JoinedEditorOption,
  CodeEditorConfig,
  CodeEditorLoadingStatus,
  NZ_CODE_EDITOR_CONFIG
} from './code-editor.definitions';

// tslint:disable-next-line no-any
declare const monaco: any;

// tslint:disable no-any
function tryTriggerFunc(fn?: (...args: any[]) => any): (...args: any) => void {
  return (...args: any[]) => {
    if (fn) {
      fn(...args);
    }
  };
}
// tslint:enable no-any

@Injectable({
  providedIn: 'root'
})
export class CodeEditorService {
  private document: Document;
  private firstEditorInitialized = false;
  private loaded$ = new Subject<boolean>();
  private loadingStatus = CodeEditorLoadingStatus.UNLOAD;
  private option: JoinedEditorOption;

  option$ = new BehaviorSubject<JoinedEditorOption>(this.option);

  constructor(
    @Inject(NZ_CODE_EDITOR_CONFIG) private config: CodeEditorConfig,
    @Inject(DOCUMENT) _document: any // tslint:disable-line no-any
  ) {
    this.document = _document;
    this.option = this.config.defaultEditorOption || {};
  }

  // TODO: use config service later.
  updateDefaultOption(option: JoinedEditorOption): void {
    this.option = { ...this.option, ...option };
    this.option$.next(this.option);

    if (option.theme) {
      monaco.editor.setTheme(option.theme);
    }
  }

  requestToInit(): Observable<JoinedEditorOption> {
    if (this.loadingStatus === CodeEditorLoadingStatus.LOADED) {
      this.onInit();
      return observableOf(this.getLatestOption());
    }

    if (this.loadingStatus === CodeEditorLoadingStatus.UNLOAD) {
      this.loadMonacoScript();
    }

    return this.loaded$.asObservable().pipe(
      tap(() => this.onInit()),
      map(() => this.getLatestOption())
    );
  }

  private loadMonacoScript(): void {
    if (this.loadingStatus === CodeEditorLoadingStatus.LOADING) {
      return;
    }

    this.loadingStatus = CodeEditorLoadingStatus.LOADING;

    const assetsRoot = this.config.assetsRoot;
    const vs = assetsRoot ? `${assetsRoot}/vs` : 'assets/vs';
    const windowAsAny = window as any; // tslint:disable-line no-any
    const loadScript = this.document.createElement('script');

    loadScript.type = 'text/javascript';
    loadScript.src = `${vs}/loader.js`;
    loadScript.onload = () => {
      windowAsAny.require.config({
        paths: { vs }
      });
      windowAsAny.require(['vs/editor/editor.main'], () => {
        this.loadingStatus = CodeEditorLoadingStatus.LOADED;
        this.loaded$.next(true);
        this.loaded$.complete();
        this.onLoad();
      });
    };
    loadScript.onerror = () => {
      throw new Error(`${PREFIX} cannot load assets of monaco editor from source "${vs}".`);
    };

    this.document.documentElement.appendChild(loadScript);
  }

  private onInit(): void {
    if (!this.firstEditorInitialized) {
      this.firstEditorInitialized = true;
      tryTriggerFunc(this.config.onFirstEditorInit)();
    }

    tryTriggerFunc(this.config.onInit)();
  }

  private onLoad(): void {
    tryTriggerFunc(this.config.onLoad)();
  }

  private getLatestOption(): JoinedEditorOption {
    return { ...this.option };
  }
}
