import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createEditorViewState, EmojiPlugin } from 'roosterjs-react';
import { Ribbon, RibbonPlugin } from 'roosterjs-react-ribbon';
import ReactEditor from './ReactEditor';
import ribbonButtonRenderer from './ribbonButtonRenderer';

export class SampleView {
  static Init(containerId: string, initialContent: string) {
    const container = document.getElementById(containerId);
    const viewState = createEditorViewState(initialContent);
    const ribbonPlugin = new RibbonPlugin();
    const emojiPlugin = new EmojiPlugin();
    const emojiButton = { name: 'btnEmoji', onClick: editor => emojiPlugin.startEmoji() };
    const ribbonButtons = [
      'emoji',
      'bold',
      'italic',
      'underline',
      'font',
      'size',
      'bkcolor',
      'color',
      'bullet',
      'number',
      'indent',
      'outdent',
      'quote',
      'left',
      'center',
      'right',
      'link',
      'unlink',
      'sub',
      'super',
      'strike',
      'alttext',
      'ltr',
      'rtl',
      'undo',
      'redo',
      'unformat'
    ];
    const view = (
      <div>
        <Ribbon
          ribbonPlugin={ribbonPlugin}
          className={'myRibbon'}
          buttonRenderer={ribbonButtonRenderer}
          buttonNames={ribbonButtons}
          additionalButtons={{ emoji: emojiButton }}
        />
        <ReactEditor className={'editor'} viewState={viewState} plugins={[ribbonPlugin, emojiPlugin]} />
      </div>
    );

    window.addEventListener('resize', () => ribbonPlugin.resize());
    ReactDom.render(view, container, null);
  }
}
