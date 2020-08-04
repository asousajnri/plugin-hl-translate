import { isElementValid } from '../../core';

export const handleOpenFlags = ({ buttonClicked, flagsListing }) => {
  buttonClicked.classList.toggle('is-active');
  flagsListing.classList.toggle('is-active');
};

export const handlePopupClose = elements => {
  document.addEventListener('click', e => {
    e.stopPropagation();
    const elementTarget = e.target;

    isElementValid(elementTarget, elements) ? null : _hide();

    document.addEventListener('scroll', e => _hide());
  });
};
