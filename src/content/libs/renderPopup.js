const renderPopup = () => {
  const popup = document.createElement('DIV');
  const popupText = document.createElement('P');
  const popupArrow = document.createElement('SPAN');
  const popupButton = document.createElement('i');

  popup.appendChild(popupArrow);
  popup.appendChild(popupText);
  popup.appendChild(popupButton);

  popup.setAttribute('class', 'popup-hl');
  popupArrow.setAttribute('class', 'popup-hl__arrow-down');
  popupButton.setAttribute('class', 'popup-hl__button');

  document.body.appendChild(popup);

  return {
    popup,
    popupText,
    popupButton,
  };
};

module.exports = renderPopup;
