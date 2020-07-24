export default {
  isApprovedTag(tagTarget) {
    return [
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
  },
  find(data, word) {
    if (data.length === 0 || data === undefined) return null;

    const query = data.filter(value => value.word === word);
    if (query.length !== 0) {
      return query;
    } else {
      return null;
    }
  },
  hasWord(query) {
    if (query) {
      return true;
    } else {
      return false;
    }
  },
  filter(data, word) {
    return data.filter(value => value.word !== word);
  },
  isElementValid(elementTarget, elements) {
    return elements.filter(element => element === elementTarget).length > 0 ? true : false;
  },
  isSelectedFlag(flags, flagToSelected) {
    flags.map(flag => {
      if (flag.flagItemHTML === flagToSelected) {
        flag.flagItemHTML.classList.add('is-selected');
        return true;
      } else {
        flag.flagItemHTML.classList.remove('is-selected');
      }
    });
  },
};
