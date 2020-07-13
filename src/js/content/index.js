import 'regenerator-runtime/runtime';

import { operators, translate, getSelected } from '../libs/index';
const { isApprovedTag } = operators;

import popup from './modules/popup';

(() => {
  const translatePortuguese = translate('pt');

  popup.render();
  popup.closeWithMouseEvent();

  document.addEventListener('mouseup', async e => {
    const tagMouseuped = e.target;

    const { objectSelection, selectedText } = getSelected();
    if (!selectedText || !isApprovedTag(tagMouseuped.tagName).length) return;

    const { sourceLanguage, translatedText } = await translatePortuguese(selectedText);
    if (sourceLanguage !== 'en' || objectSelection.anchorNode === null) return;

    popup.show({
      objectSelection,
      selectedText,
      sourceLanguage,
      translatedText,
    });
  });
})();
