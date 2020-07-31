import { flags, translate, operators } from '../../libs';

const { createElement } = operators;

const popup = () => {
  const DOM_POPUP = createElement({ type: 'div', className: 'popup-hlt' });
  const DOM_POPUP_TEXT_SET_TRANSLATION = createElement({ type: 'p' });
  const DOM_POPUP_DETAIL = createElement({ type: 'span', className: 'popup-hlt__after-arrow' });
  const DOM_POPUP_OPEN_FLAGS_ARROW = createElement({
    type: 'img',
    className: 'popup-hlt__open-flags-arrow',
  });
  const DOM_POPUP_FLAGS_LISTING = createElement({
    type: 'ul',
    className: 'popup-hlt__flags-listing',
  });
  const DOM_POPUP_BY_TO_TRANSLATION = createElement({
    type: 'div',
    className: 'popup-hlt__to-by-translation',
  });

  const resetFlagsListing = () => {
    const liItems = Array.from(DOM_POPUP_FLAGS_LISTING.querySelectorAll('li'));
    if (liItems.length > 0) {
      liItems.map(liItem => liItem.remove());
    }
  };

  const renderFlagsListing = () => {
    resetFlagsListing();

    for (let flag in flags.countriesFlag) {
      const flagPreffix = flags.countriesFlag[flag].preffix;
      const flagUrlFlagImage = flags.countriesFlag[flag].image;
      const DOM_POPUP_FLAGS_LISTING_ITEM = createElement({ type: 'li' });

      DOM_POPUP_FLAGS_LISTING_ITEM.setAttribute('flag-preffix', flagPreffix);
      DOM_POPUP_FLAGS_LISTING_ITEM.innerHTML = `<img flag-preffix="${flagPreffix}" src="${chrome.extension.getURL(
        `images/flags/${flagUrlFlagImage}.png`
      )}" />`;

      chrome.storage.sync.get(['plugin_hl-t'], response => {
        const { preffixCountry } = response['plugin_hl-t'];

        if (flagPreffix === preffixCountry) {
          DOM_POPUP_FLAGS_LISTING_ITEM.classList.add('is-selected');
        }
      });

      DOM_POPUP_FLAGS_LISTING.appendChild(DOM_POPUP_FLAGS_LISTING_ITEM);
    }
  };

  const _handleClickOpenFlags = () => {
    console.log('DOM_POPUP_OPEN_FLAGS_ARROW');

    DOM_POPUP_OPEN_FLAGS_ARROW.classList.toggle('is-active');
    DOM_POPUP_FLAGS_LISTING.classList.toggle('is-active');
  };

  const _render = () => {
    DOM_POPUP.appendChild(DOM_POPUP_TEXT_SET_TRANSLATION);
    DOM_POPUP.appendChild(DOM_POPUP_BY_TO_TRANSLATION);
    DOM_POPUP.appendChild(DOM_POPUP_DETAIL);

    DOM_POPUP_OPEN_FLAGS_ARROW.setAttribute(
      'src',
      chrome.extension.getURL(`images/chevron-down.svg`)
    );

    renderFlagsListing();
    DOM_POPUP.appendChild(DOM_POPUP_FLAGS_LISTING);

    DOM_POPUP_OPEN_FLAGS_ARROW.addEventListener('click', _handleClickOpenFlags);

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

  const _remove = () => {
    DOM_POPUP_FLAGS_LISTING.remove();
    DOM_POPUP.remove();
  };

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

  const _destroyAllEvents = () => {
    document.removeEventListener('click', _removeEventHideIfClickMousePopupOut);
    DOM_POPUP_OPEN_FLAGS_ARROW.removeEventListener('click', _handleClickOpenFlags);
  };

  return {
    DOMPopupRender: _render,
    DOMPopupShow: _show,
    DOMPopupRemove: _remove,
    destroyAllEvents: _destroyAllEvents,
    hideIfClickMousePopupOut: _hideIfClickMousePopupOut,
    removeEventHideIfClickMousePopupOut: _removeEventHideIfClickMousePopupOut,
  };
};

export default popup();
