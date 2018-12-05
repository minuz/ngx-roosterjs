import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SampleView } from './react/sample';
import { EditorViewState } from 'roosterjs-react';

@Component({
  selector: 'ngx-roosterjs',
  template: `
    <div id="roosterjs-container" class="default-editor"></div>
  `,
  styles: []
})
export class NgxRoosterjsComponent implements OnInit, OnDestroy {
  private _viewState: EditorViewState;

  @Input()
  set content(value: string) {
    if (this._viewState) {
      this._viewState.content = value;
      this._viewState.isDirty = true;
    } else {
      this._viewState = {
        content: value,
        isDirty: false
      };
    }
  }

  get content() {
    if (!this._viewState) {
      this._viewState.content = '';
      this._viewState.isDirty = false;
    }
    return this._viewState.content;
  }

  constructor() {}

  ngOnInit() {
    this._viewState = SampleView.Init('roosterjs-container', this.content);
  }

  ngOnDestroy() {
    this._viewState = null;
  }
}
