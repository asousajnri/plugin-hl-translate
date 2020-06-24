require('regenerator-runtime/runtime');

const R = require('ramda');

const { isApprovedTag } = require('./operators');

const translate = require('./translate');
const renderPopup = require('./renderPopup');
const getSelectedText = require('./getSelectedText');
const closePopup = require('./closePopup');
const wordsStore = require('./wordsStore');

const hlTranslate = () => {
  const { popup, popupText, popupButton } = renderPopup();
  const translatePortuguese = translate('pt');

  document.addEventListener('mouseup', async e => {
    const tagMouseuped = e.target;
    const objectSelection = getSelectedText();
    const selectedText = objectSelection.toString();

    if (!selectedText || !isApprovedTag(tagMouseuped.tagName).length) return;

    const { sourceLanguage, translatedText } = await translatePortuguese(selectedText);

    if (sourceLanguage !== 'en' || objectSelection.anchorNode === null) return;

    const rangeT = objectSelection.getRangeAt(0);
    const rectT = rangeT.getBoundingClientRect();

    popupText.innerHTML = translatedText;
    popup.classList.add('is-active');

    popup.style.top = `${rectT.y}px`;
    popup.style.left = `${rectT.x + rectT.width / 2 - popup.clientWidth / 2}px`;

    if (R.isEmpty(wordsStore.search(selectedText))) {
      popupButton.classList.remove('is-active');
    } else {
      popupButton.classList.add('is-active');
    }

    popupButton.addEventListener('click', function () {
      if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        wordsStore.remove(selectedText);
      } else {
        this.classList.add('is-active');
        wordsStore.save(selectedText, translatedText);
      }
    });
  });

  document.addEventListener('click', e => {
    e.target !== popup && e.target !== popupButton ? closePopup(popup, popupText) : null;
  });

  document.addEventListener('scroll', e => closePopup(popup, popupText));
};

module.exports = hlTranslate();
