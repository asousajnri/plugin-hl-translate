const popup = () => {
  const wrapper = document.createElement('DIV');
  const text = document.createElement('P');
  const arrowDown = document.createElement('SPAN');
  // const button = document.createElement('i');

  const render = () => {
    wrapper.appendChild(arrowDown);
    wrapper.appendChild(text);
    // wrapper.appendChild(button);

    wrapper.setAttribute('class', 'popup-hl');
    arrowDown.setAttribute('class', 'popup-hl__arrow-down');
    // button.setAttribute('class', 'popup-hl__button');

    document.body.appendChild(wrapper);
  };

  // const buttonIsActive = state => {
  //   if (state) {
  //     button.classList.add('is-active');
  //   } else {
  //     button.classList.remove('is-active');
  //   }
  // };

  const close = () => {
    wrapper.classList.remove('is-active');
    text.innerHTML = '';
  };

  const closeWithMouseEvent = () => {
    document.addEventListener('click', e => (e.target !== wrapper ? close() : null));
    document.addEventListener('scroll', e => close());
  };

  const show = ({ objectSelection, translatedText }) => {
    render();

    const rangeT = objectSelection.getRangeAt(0);
    const rectT = rangeT.getBoundingClientRect();

    text.innerHTML = translatedText;
    wrapper.classList.add('is-active');

    wrapper.style.top = `${rectT.y}px`;
    wrapper.style.left = `${rectT.x + rectT.width / 2 - wrapper.clientWidth / 2}px`;
  };

  return {
    // wrapper,
    // text,
    // // button,
    // // buttonIsActive,
    show,
    closeWithMouseEvent,
    close,
  };
};

module.exports = popup();
