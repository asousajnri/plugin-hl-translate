export const createElement = ({ type, className }) => {
  const newElement = document.createElement(type);

  if (className) {
    newElement.classList.add(className);
  }

  return newElement;
};

export const isApprovedTag = tagTarget => {
  const filteredTags = [
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'span',
    'b',
    'em',
    'code',
    'a',
    'li',
    'small',
    'div',
  ].filter(tag => tagTarget.toUpperCase() === tag.toUpperCase());

  if (filteredTags.length > 0) {
    return true;
  } else {
    return false;
  }
};

export const isElementValid = (elementTarget, elements) => {
  return elements.filter(element => element === elementTarget).length > 0 ? true : false;
};

export const isSelectedFlag = (flags, flagToSelected) => {
  flags.map(flag => {
    if (flag.flagItemHTML === flagToSelected) {
      flag.flagItemHTML.classList.add('is-selected');
      return true;
    } else {
      flag.flagItemHTML.classList.remove('is-selected');
    }
  });
};
