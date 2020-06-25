const popup = () => {
  const wrapper = document.createElement('DIV');
  const text = document.createElement('P');
  const arrowDown = document.createElement('SPAN');

  const wrapperControls = document.createElement('DIV');
  const buttonSave = document.createElement('button');
  const buttonListPage = document.createElement('button');
  const buttonTrash = document.createElement('button');

  const render = () => {
    wrapper.appendChild(text);

    wrapperControls.appendChild(buttonListPage);
    wrapperControls.appendChild(buttonSave);
    wrapperControls.appendChild(buttonTrash);

    wrapper.appendChild(wrapperControls);

    wrapper.appendChild(arrowDown);

    wrapper.setAttribute('class', 'popup-hl');
    arrowDown.setAttribute('class', 'popup-hl__arrow-down');

    wrapperControls.setAttribute('class', 'popup-hl__controls');

    buttonSave.setAttribute('class', 'popup-hl__button popup-hl__button--save');
    buttonSave.innerHTML = `<img src="${chrome.extension.getURL(
      'images/save-icon.svg'
    )}" alt="button save" />`;

    buttonListPage.setAttribute('class', 'popup-hl__button popup-hl__button--list-page');
    buttonListPage.innerHTML = `<img src="${chrome.extension.getURL(
      'images/list.svg'
    )}" alt="button list" />`;

    buttonTrash.setAttribute('class', 'popup-hl__button popup-hl__button--list-trash');
    buttonTrash.innerHTML = `<img src="${chrome.extension.getURL(
      'images/trash.svg'
    )}" alt="button trash" />`;

    document.body.appendChild(wrapper);
  };

  const close = () => {
    wrapper.classList.remove('is-active');
    text.innerHTML = '';
  };

  const closeWithMouseEvent = () => {
    document.addEventListener('click', e => (e.target !== wrapper ? close() : null));
    document.addEventListener('scroll', e => close());
  };

  const show = ({ objectSelection, translatedText }) => {
    const rangeT = objectSelection.getRangeAt(0);
    const rectT = rangeT.getBoundingClientRect();

    text.innerHTML = translatedText;
    wrapper.classList.add('is-active');

    wrapper.style.top = `${rectT.y}px`;
    wrapper.style.left = `${rectT.x + rectT.width / 2 - wrapper.clientWidth / 2}px`;
  };

  return {
    buttons: {
      buttonSave,
      buttonListPage,
      buttonTrash,
    },
    render,
    show,
    closeWithMouseEvent,
    close,
  };
};

module.exports = popup();
