import { isElementValid } from '../../core';

export const hide = elementsToHide => {
  elementsToHide.map(element => element.classList.remove('is-active'));
};

export const handleFlagsOpen = ({ buttonClicked, flagsListing }) => {
  buttonClicked.classList.toggle('is-active');
  flagsListing.classList.toggle('is-active');

  // if (
  //   buttonClicked.classList.contains('is-active') &&
  //   flagsListing.classList.contains('is-active')
  // ) {
  //   buttonClicked.classList.remove('is-active');
  //   flagsListing.classList.remove('is-active');
  // } else {
  //   buttonClicked.classList.add('is-active');
  //   flagsListing.classList.add('is-active');
  // }
};

export const handlePopupClose = elements => {
  document.addEventListener('click', e => {
    e.stopPropagation();
    const elementTarget = e.target;

    isElementValid(elementTarget, elements) ? null : hide(elements);
    document.addEventListener('scroll', e => hide(elements));
  });
};

export const destroyEvent = nodesToRemoveEvents => () => {
  if (nodesToRemoveEvents) {
    nodesToRemoveEvents.map(element => {
      const nodeElement = element.nodeElement;
      const eventType = element.eventType;
      const eventFunction = element.eventFunction;

      nodeElement.removeEventListener(eventType, eventFunction);
    });
  }
};

export const destroyPopupHtml = (popupElement, destroyAllEvents) => {
  popupElement.remove();
  destroyAllEvents();
};
