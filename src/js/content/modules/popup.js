import { flags } from '../../libs';

const popup = () => {
  const wrapper = document.createElement('DIV');
  const text = document.createElement('P');
  const arrowDown = document.createElement('SPAN');
  const listLanguages = document.createElement('UL');

  const wrapperNotifyTranslate = document.createElement('DIV');

  const render = () => {
    wrapper.appendChild(text);
    wrapper.appendChild(wrapperNotifyTranslate);
    wrapper.appendChild(arrowDown);

    wrapper.setAttribute('class', 'popup-hl');
    arrowDown.setAttribute('class', 'popup-hl__arrow-down');
    wrapperNotifyTranslate.setAttribute('class', 'popup-hl__notify-translate');

    document.body.appendChild(wrapper);
  };

  const close = () => {
    wrapper.classList.remove('is-active');
    text.innerHTML = '';
  };

  const closeWithMouseEvent = () => {
    document.addEventListener('click', e => {
      e.stopPropagation();
      const elementClicked = e.target;

      elementClicked !== wrapperNotifyTranslate &&
      elementClicked !== text &&
      elementClicked !== wrapper &&
      !elementClicked.classList.contains('popup__button-image')
        ? close()
        : null;
    });
    document.addEventListener('scroll', e => close());
  };

  const hide = () => wrapper.remove();

  const getUrlFlagImage = flagSelected => {
    for (let flag in flags) {
      if (flags[flag].preffix === flagSelected) {
        return chrome.extension.getURL(`images/flags/${flags[flag].image}.png`);
      }
    }
  };

  const show = translateData => {
    const { objectSelection, sourceLanguage, translatedText } = translateData;

    console.log(getUrlFlagImage('en'));

    wrapperNotifyTranslate.innerHTML = `
      <p>
        By: <img src="${getUrlFlagImage(sourceLanguage)}" alt="" />
        To: <img src="${getUrlFlagImage('pt')}" alt="" />
      </p>
    `;

    const rangeT = objectSelection.getRangeAt(0);
    const rectT = rangeT.getBoundingClientRect();

    text.innerHTML = translatedText;
    wrapper.classList.add('is-active');

    wrapper.style.top = `${rectT.y}px`;
    wrapper.style.left = `${rectT.x + rectT.width / 2 - wrapper.clientWidth / 2}px`;
  };

  return {
    render,
    show,
    hide,
    closeWithMouseEvent,
    close,
  };
};

export default popup();
