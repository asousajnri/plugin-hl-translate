import { handlePopupClose, hide, handleFlagsOpen } from './events';

export default elementRemoveEvent => {
  const [DOM_POPUP, DOM_POPUP_OPEN_FLAGS_ARROW] = elementRemoveEvent;

  return [
    {
      nodeElement: document,
      eventsType: [
        {
          type: 'scroll',
          eventFunction: hide,
        },
      ],
    },
    {
      nodeElement: DOM_POPUP,
      eventsRemove: [
        {
          type: 'click',
          eventFunction: handlePopupClose,
        },
      ],
    },
    {
      nodeElement: DOM_POPUP_OPEN_FLAGS_ARROW,
      eventsType: [
        {
          type: 'click',
          eventFunction: handleFlagsOpen,
        },
      ],
    },
  ];
};
