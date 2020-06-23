require('regenerator-runtime/runtime');

const { isApprovedTag } = require('./operators');

const getSelectedText = require('./getSelectedText');
const translate = require('./translate');
const renderPopup = require('./renderPopup');

const hlTranslate = () => {
  const { popup, popupText } = renderPopup();
  const translatePortuguese = translate('pt');

  document.addEventListener('mouseup', async e => {
    const tagMouseuped = e.target;
    console.log('Tag Mouseped: >> ', tagMouseuped);

    const selectedText = getSelectedText();
    console.log('Selected Text: >> ', selectedText);

    console.log('IF validar se há texto selecionado || Tag aprovado:');
    if (!selectedText.toString() || !isApprovedTag(tagMouseuped.tagName).length) return;

    console.log('IF validar se há texto selecionado || Tag aprovado (Passou no IF):');

    console.log('Await para traduzir texto selecionado.');
    const { sourceLanguage, translatedText } = await translatePortuguese(selectedText.toString());

    console.log('IF para validar se não é (EN) e se AnchorNode é null');
    if (sourceLanguage !== 'en' || selectedText.anchorNode === null) return;

    console.log('Pegando os RangeAt');
    const rangeT = selectedText.getRangeAt(0);
    const rectT = rangeT.getBoundingClientRect();

    popupText.innerHTML = translatedText;
    popup.classList.add('is-active');

    popup.style.top = `${rectT.y}px`;
    popup.style.left = `${rectT.x + rectT.width / 2 - popup.clientWidth / 2}px`;
  });

  const closePopup = () => {
    popup.classList.remove('is-active');
    popupText.innerHTML = '';
  };

  document.addEventListener('click', e => (e.target !== popup ? closePopup() : null));
  document.addEventListener('scroll', e => closePopup());
};

module.exports = hlTranslate();
