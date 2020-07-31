import 'regenerator-runtime/runtime';

import { operators, translate, getSelected } from '../libs/index';
const { isApprovedTag } = operators;

import popup from './modules/popup';

const handleMouseUp = e => {
  const tagMouseuped = e.target;

  chrome.storage.sync.get(['plugin_hl-t'], async response => {
    const { preffixCountry } = response['plugin_hl-t'];

    const { objectSelection, selectedText } = getSelected();
    if (!selectedText || !isApprovedTag(tagMouseuped.tagName)) return;

    const { sourceLanguage, translatedText } = await translate(preffixCountry)(selectedText);
    if (objectSelection.anchorNode === null) return;

    popup.DOMPopupShow({
      objectSelection,
      selectedText,
      sourceLanguage,
      translatedText,
    });
  });
};

const start = () => {
  popup.DOMPopupRender();
  popup.hideIfClickMousePopupOut();
  document.addEventListener('mouseup', handleMouseUp);
};

const destroy = () => {
  popup.DOMPopupRemove();
  popup.destroyAllEvents();
  document.removeEventListener('mouseup', handleMouseUp);
};

chrome.runtime.onMessage.addListener(({ isEnablePlugin }) => {
  if (isEnablePlugin) {
    start();
  } else {
    destroy();
  }
});
