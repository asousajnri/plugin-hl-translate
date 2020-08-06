import { isElementValid } from '../../core';

export const hide = elementsToHide => {
  elementsToHide.map(element => element.classList.remove('is-active'));
};

export const handleFlagsOpen = ({ buttonClicked, flagsListing }) => {
  buttonClicked.classList.toggle('is-active');
  flagsListing.classList.toggle('is-active');
};

export const handlePopupClose = (event, elements) => {
  event.stopPropagation();
  const elementTarget = events.target;

  isElementValid(elementTarget, elements) ? null : hide(elements);
  document.addEventListener('scroll', e => hide(elements));
};

export const destroyEventListener = nodesTodataRemoveEvents => () => {
  if (nodesTodataRemoveEvents) {
    nodesTodataRemoveEvents.map(element => {
      const { nodeElement, eventsRemove } = element;

      eventsRemove.map(eventRemove => {
        nodeElement.removeEventListener(eventRemove.type, eventRemove.eventFunction);
      });
    });
  }
};

export const destroyPopupHtml = (popupElement, destroyAllEventsListener) => {
  popupElement.remove();
  destroyAllEventsListener();
};
