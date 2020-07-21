import { flags } from '../../libs';

const popup = () => {
  const wrapper = document.createElement('DIV');
  const text = document.createElement('P');
  const arrowDown = document.createElement('SPAN');
  const buttonOpenListLanguage = document.createElement('IMG');
  const listLanguages = document.createElement('UL');
  const wrapperNotifyTranslate = document.createElement('DIV');

  const render = () => {
    wrapper.appendChild(text);
    wrapper.appendChild(wrapperNotifyTranslate);
    wrapper.appendChild(arrowDown);

    for (let flag in flags) {
      const listLanguagesItem = document.createElement('LI');
      listLanguagesItem.innerHTML = `<img src="${chrome.extension.getURL(
        `images/flags/${flags[flag].image}.png`
      )}" />`;

      listLanguages.appendChild(listLanguagesItem);
    }

    wrapper.appendChild(listLanguages);

    wrapper.setAttribute('class', 'popup-hl');
    arrowDown.setAttribute('class', 'popup-hl__arrow-down');
    wrapperNotifyTranslate.setAttribute('class', 'popup-hl__notify-translate');
    listLanguages.setAttribute('class', 'popup-hl__list-languages');

    buttonOpenListLanguage.setAttribute('class', 'popup-hl__button-open-language');
    buttonOpenListLanguage.setAttribute('src', chrome.extension.getURL(`images/chevron-down.svg`));

    buttonOpenListLanguage.addEventListener('click', () => {
      buttonOpenListLanguage.classList.toggle('is-active');
      listLanguages.classList.toggle('is-active');
    });

    document.body.appendChild(wrapper);
  };

  const close = () => {
    wrapper.classList.remove('is-active');
    text.innerHTML = '';
    buttonOpenListLanguage.classList.remove('is-active');
    listLanguages.classList.remove('is-active');
  };

  const isElementValid = (elementClicked, elements) => {
    return elements.filter(element => element === elementClicked).length > 0 ? true : false;
  };

  const closeWithMouseEvent = () => {
    document.addEventListener('click', e => {
      e.stopPropagation();
      const elementClicked = e.target;

      isElementValid(elementClicked, [
        wrapper,
        wrapperNotifyTranslate,
        buttonOpenListLanguage,
        listLanguages,
        ...Array.from(listLanguages.querySelectorAll('img')),
      ])
        ? null
        : close();
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

    wrapperNotifyTranslate.innerHTML = `
      <p>
        By: <img src="${getUrlFlagImage(sourceLanguage)}" alt="" />
        To: <img src="${getUrlFlagImage('pt')}" alt="" />
      </p>
    `;

    wrapperNotifyTranslate.appendChild(buttonOpenListLanguage);

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
