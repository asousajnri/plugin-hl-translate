const renderPopup = () => {
  const popup = document.createElement('DIV');
  const popupText = document.createElement('P');
  const popupArrow = document.createElement('SPAN');

  popup.appendChild(popupArrow);
  popup.appendChild(popupText);

  popup.setAttribute('class', 'popup-hl');
  popupArrow.setAttribute('class', 'arrow-down');

  document.body.appendChild(popup);

  return {
    popup,
    popupText,
  };
};

module.exports = renderPopup;
