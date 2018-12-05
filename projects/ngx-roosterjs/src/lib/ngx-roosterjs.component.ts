import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SampleView } from './react/sample';

@Component({
  selector: 'ngx-roosterjs',
  template: `
    <div id="roosterjs-container" class="default-editor"></div>
  `,
  styles: []
})
export class NgxRoosterjsComponent implements OnInit, OnDestroy {
  @Input() initialContent: string;

  constructor() {}

  ngOnInit() {
    SampleView.Init('roosterjs-container', '');
  }

  ngOnDestroy() {}
}
