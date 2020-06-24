require('regenerator-runtime/runtime');

const R = require('ramda');

const { isApprovedTag } = require('./operators');

const translate = require('./translate');
const getSelected = require('./getSelected');
const popup = require('./popup');
const store = require('./store');

const hlTranslate = () => {
  const translatePortuguese = translate('pt');

  document.addEventListener('mouseup', async e => {
    const tagMouseuped = e.target;

    const { objectSelection, selectedText } = getSelected();
    if (!selectedText || !isApprovedTag(tagMouseuped.tagName).length) return;

    const { sourceLanguage, translatedText } = await translatePortuguese(selectedText);
    if (sourceLanguage !== 'en' || objectSelection.anchorNode === null) return;

    store.add(selectedText, translatedText);

    popup.show({
      objectSelection,
      translatedText,
    });
    popup.closeWithMouseEvent();
  });
};

module.exports = hlTranslate();
