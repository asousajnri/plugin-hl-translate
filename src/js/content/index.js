import 'regenerator-runtime/runtime';

import { operators, translate, getSelected } from '../libs/index';
const { isApprovedTag } = operators;

import popup from './modules/popup';

const start = () => {
  const handleMouseUp = async e => {
    const tagMouseuped = e.target;
    const translateText = translate('pt');

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

  popup.render();
  popup.closeWithMouseEvent();
  document.addEventListener('mouseup', handleMouseUp);
};

start();
