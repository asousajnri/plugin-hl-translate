import 'regenerator-runtime/runtime';

import { operators, translate, getSelected } from '../libs/index';
const { isApprovedTag } = operators;

import chromeOperators from './modules/chrome';
import popup from './modules/popup';

const start = () => {
  chromeOperators.listenerStatesFromPopup(start);

  const states = JSON.parse(localStorage.getItem('plugin_hl-t'));

  const handleMouseUp = async e => {
    const tagMouseuped = e.target;
    const { isSelectedFlag: targetLanguage } = JSON.parse(localStorage.getItem('plugin_hl-t'));

    const translateText = translate(targetLanguage);

    const { objectSelection, selectedText } = getSelected();
    if (!selectedText || !isApprovedTag(tagMouseuped.tagName).length) return;

    const { sourceLanguage, translatedText } = await translateText(selectedText);
    if (sourceLanguage !== 'en' || objectSelection.anchorNode === null) return;

    popup.show({
      objectSelection,
      selectedText,
      sourceLanguage,
      translatedText,
    });
  };

  if (states.enable) {
    popup.render();
    popup.closeWithMouseEvent();
    document.addEventListener('mouseup', handleMouseUp);
  } else {
    popup.hide();
    document.removeEventListener('mouseup', handleMouseUp);
  }
};

start();
