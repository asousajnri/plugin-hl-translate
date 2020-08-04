import { createElement } from '../../core';

const createHtml = () => {
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

  return {
    DOM_POPUP,
    DOM_POPUP_TEXT_SET_TRANSLATION,
    DOM_POPUP_DETAIL,
    DOM_POPUP_OPEN_FLAGS_ARROW,
    DOM_POPUP_FLAGS_LISTING,
    DOM_POPUP_BY_TO_TRANSLATION,
  };
};
