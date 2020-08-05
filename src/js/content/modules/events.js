import { isElementValid } from '../../core';

export const hide = elementsToHide => {
  elementsToHide.map(element => element.classList.remove('is-active'));
};

export const handleFlagsOpen = ({ buttonClicked, flagsListing }) => {
  buttonClicked.classList.toggle('is-active');
  flagsListing.classList.toggle('is-active');
};

export const handlePopupClose = elements => {
  document.addEventListener('click', e => {
    e.stopPropagation();
    const elementTarget = e.target;

    isElementValid(elementTarget, elements) ? null : hide();
    document.addEventListener('scroll', e => hide());
  });
};

export const destroyAllEvents = nodesToRemoveEvents => () => {
  if (elementsToRemoveEvent) {
    elementsToRemoveEvent.map(element => {
      const nodeElement = element.nodeElement;
      const eventType = element.eventType;
      const eventFunction = element.eventFunction;

      nodeElement.removeEventListener(eventType, eventFunction);
    });
  }
};

export const destroyPopupHtml = popupElement => {
  popupElement.remove();
};
