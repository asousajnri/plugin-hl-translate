const closePopup = (popup, popupText) => {
  popup.classList.remove('is-active');
  popupText.innerHTML = '';
};

module.exports = closePopup;
