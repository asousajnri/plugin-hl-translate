require('regenerator-runtime/runtime');

const {
  operators: { isApprovedTag },
  translate,
  getSelected,
} = require('../libs/index');

const popup = require('./modules/popup');

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
      translatedText,
    });
  });
})();
