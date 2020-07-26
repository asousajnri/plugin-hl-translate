import { flags, translate, operators } from '../../libs';

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

    for (let flag in flags.countriesFlag) {
      const listLanguagesItem = document.createElement('LI');
      listLanguagesItem.innerHTML = `<img flag-preffix="${
        flags.countriesFlag[flag].preffix
      }" src="${chrome.extension.getURL(
        `images/flags/${flags.countriesFlag[flag].image}.png`
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

  const renderNotifyTranslate = sourceLanguage => {
    chrome.storage.sync.get(['plugin_hl-t'], async response => {
      const { preffixCountry } = response['plugin_hl-t'];

      wrapperNotifyTranslate.innerHTML = `
        <p>
          By: <img src="${flags.getOneImageFlagUrl(sourceLanguage)}" alt="" />
          To: <img src="${flags.getOneImageFlagUrl(preffixCountry)}" alt="" />
        </p>
      `;

      wrapperNotifyTranslate.appendChild(buttonOpenListLanguage);
    });
  };

  const close = () => {
    buttonOpenListLanguage.classList.remove('is-active');
    listLanguages.classList.remove('is-active');
    wrapper.classList.remove('is-active');
    text.innerHTML = '';
  };

  const remove = () => {
    wrapper.remove();
  };

  const handleClickMouse = e => {
    e.stopPropagation();
    const elementTarget = e.target;

    operators.isElementValid(elementTarget, [
      wrapper,
      wrapperNotifyTranslate,
      buttonOpenListLanguage,
      listLanguages,
      ...Array.from(listLanguages.querySelectorAll('img')),
    ])
      ? null
      : close();

    document.addEventListener('scroll', e => close());
  };

  const removeCloseWithMouseEvent = () => {
    document.removeEventListener('click', handleClickMouse);
    document.removeEventListener('scroll', e => close());
  };

  const closeWithMouseEvent = () => {
    document.addEventListener('click', handleClickMouse);
  };

  const show = translateData => {
    const { objectSelection, sourceLanguage, translatedText } = translateData;

    renderNotifyTranslate(sourceLanguage);

    Array.from(listLanguages.querySelectorAll('img')).map(itemFlag => {
      itemFlag.addEventListener('click', async () => {
        const targetLanguage = itemFlag.getAttribute('flag-preffix');

        chrome.storage.sync.get(['plugin_hl-t'], response => {
          chrome.storage.sync.set({
            'plugin_hl-t': { ...response['plugin_hl-t'], preffixCountry: targetLanguage },
          });
        });

        const { translatedText } = await translate(targetLanguage)(text.textContent);
        text.innerHTML = translatedText;

        renderNotifyTranslate(sourceLanguage);
      });
    });

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
    remove,
    close,
    closeWithMouseEvent,
    removeCloseWithMouseEvent,
  };
};

export default popup();
