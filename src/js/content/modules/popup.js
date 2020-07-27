import { flags, translate, operators } from '../../libs';

const popup = () => {
  const DOM_POPUP = document.createElement('DIV');
  const DOM_POPUP_TEXT_SET_TRANSLATION = document.createElement('P');
  const DOM_POPUP_DETAIL = document.createElement('SPAN');
  const DOM_POPUP_OPEN_FLAGS_ARROW = document.createElement('IMG');
  const DOM_POPUP_FLAGS_LISTING = document.createElement('UL');
  const DOM_POPUP_BY_TO_TRANSLATION = document.createElement('DIV');

  const _render = () => {
    DOM_POPUP.appendChild(DOM_POPUP_TEXT_SET_TRANSLATION);
    DOM_POPUP.appendChild(DOM_POPUP_BY_TO_TRANSLATION);
    DOM_POPUP.appendChild(DOM_POPUP_DETAIL);

    for (let flag in flags.countriesFlag) {
      const flagPreffix = flags.countriesFlag[flag].preffix;
      const flagUrlFlagImage = flags.countriesFlag[flag].image;

      const DOM_POPUP_FLAGS_LISTING_ITEM = document.createElement('LI');
      DOM_POPUP_FLAGS_LISTING_ITEM.innerHTML = `<img flag-preffix="${flagPreffix}" src="${chrome.extension.getURL(
        `images/flags/${flagUrlFlagImage}.png`
      )}" />`;

      DOM_POPUP_FLAGS_LISTING_ITEM.setAttribute('flag-preffix', flagPreffix);

      chrome.storage.sync.get(['plugin_hl-t'], response => {
        const { preffixCountry } = response['plugin_hl-t'];

        if (flagPreffix === preffixCountry) {
          DOM_POPUP_FLAGS_LISTING_ITEM.classList.add('is-selected');
        }
      });

      DOM_POPUP_FLAGS_LISTING.appendChild(DOM_POPUP_FLAGS_LISTING_ITEM);
    }

    DOM_POPUP.appendChild(DOM_POPUP_FLAGS_LISTING);

    DOM_POPUP.setAttribute('class', 'popup-hlt');
    DOM_POPUP_DETAIL.setAttribute('class', 'popup-hlt__after-arrow');
    DOM_POPUP_BY_TO_TRANSLATION.setAttribute('class', 'popup-hlt__to-by-translation');
    DOM_POPUP_FLAGS_LISTING.setAttribute('class', 'popup-hlt__flags-listing');

    DOM_POPUP_OPEN_FLAGS_ARROW.setAttribute('class', 'popup-hlt__open-flags-arrow');
    DOM_POPUP_OPEN_FLAGS_ARROW.setAttribute(
      'src',
      chrome.extension.getURL(`images/chevron-down.svg`)
    );

    DOM_POPUP_OPEN_FLAGS_ARROW.addEventListener('click', () => {
      DOM_POPUP_OPEN_FLAGS_ARROW.classList.toggle('is-active');
      DOM_POPUP_FLAGS_LISTING.classList.toggle('is-active');
    });

    document.body.appendChild(DOM_POPUP);
  };

  const _renderToByTranslation = sourceLanguage => {
    chrome.storage.sync.get(['plugin_hl-t'], async response => {
      const { preffixCountry } = response['plugin_hl-t'];

      DOM_POPUP_BY_TO_TRANSLATION.innerHTML = `
        <p>
          By: <img src="${flags.getOneImageFlagUrl(sourceLanguage)}" alt="" />
          To: <img src="${flags.getOneImageFlagUrl(preffixCountry)}" alt="" />
        </p>
      `;

      DOM_POPUP_BY_TO_TRANSLATION.appendChild(DOM_POPUP_OPEN_FLAGS_ARROW);
    });
  };

  const _hide = () => {
    DOM_POPUP_OPEN_FLAGS_ARROW.classList.remove('is-active');
    DOM_POPUP_FLAGS_LISTING.classList.remove('is-active');
    DOM_POPUP.classList.remove('is-active');
    DOM_POPUP_TEXT_SET_TRANSLATION.innerHTML = '';
  };

  const _remove = () => DOM_POPUP.remove();

  const _hideIfClickMousePopupOut = () =>
    document.addEventListener('click', e => {
      e.stopPropagation();
      const elementTarget = e.target;

      operators.isElementValid(elementTarget, [
        DOM_POPUP,
        DOM_POPUP_BY_TO_TRANSLATION,
        DOM_POPUP_OPEN_FLAGS_ARROW,
        DOM_POPUP_FLAGS_LISTING,
        ...Array.from(DOM_POPUP_FLAGS_LISTING.querySelectorAll('img')),
      ])
        ? null
        : _hide();

      document.addEventListener('scroll', e => _hide());
    });

  const _removeEventHideIfClickMousePopupOut = () => {
    document.removeEventListener('click', _hideIfClickMousePopupOut());
    document.removeEventListener('scroll', e => _hide());
  };

  const _show = translateData => {
    const { objectSelection, sourceLanguage, translatedText } = translateData;

    _renderToByTranslation(sourceLanguage);

    const DOM_POPUP_FLAGS_LISTING_IMAGES = Array.from(
      DOM_POPUP_FLAGS_LISTING.querySelectorAll('img')
    );

    const DOM_POPUP_FLAGS_LISTING_ITEMS = Array.from(
      DOM_POPUP_FLAGS_LISTING.querySelectorAll('li')
    );

    DOM_POPUP_FLAGS_LISTING_IMAGES.map(itemFlag => {
      itemFlag.addEventListener('click', async () => {
        const targetLanguage = itemFlag.getAttribute('flag-preffix');

        flags.flagIsActive(DOM_POPUP_FLAGS_LISTING_ITEMS, targetLanguage);

        chrome.storage.sync.get(['plugin_hl-t'], response => {
          chrome.storage.sync.set({
            'plugin_hl-t': { ...response['plugin_hl-t'], preffixCountry: targetLanguage },
          });
        });

        const { translatedText } = await translate(targetLanguage)(
          DOM_POPUP_TEXT_SET_TRANSLATION.textContent
        );
        DOM_POPUP_TEXT_SET_TRANSLATION.innerHTML = translatedText;

        _renderToByTranslation(sourceLanguage);
      });
    });

    const rangeT = objectSelection.getRangeAt(0);
    const rectT = rangeT.getBoundingClientRect();

    DOM_POPUP_TEXT_SET_TRANSLATION.innerHTML = translatedText;
    DOM_POPUP.classList.add('is-active');

    DOM_POPUP.style.top = `${rectT.y}px`;
    DOM_POPUP.style.left = `${rectT.x + rectT.width / 2 - DOM_POPUP.clientWidth / 2}px`;
  };

  return {
    DOMPopupRender: _render,
    DOMPopupShow: _show,
    DOMPopupRemove: _remove,
    hideIfClickMousePopupOut: _hideIfClickMousePopupOut,
    removeEventHideIfClickMousePopupOut: _removeEventHideIfClickMousePopupOut,
  };
};

export default popup();
