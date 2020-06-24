const R = require('ramda');

const { get: getLocalStorage, set: setLocalStorage } = require('./localStorageController');

const wordsStore = () => {
  // const filter = wordToCompare => R.filter(word => word !== wordToCompare, get());
  const find = word => R.find(R.propEq('word', word))(get());
  const get = () => getLocalStorage('hl-translate');

  const add = (word, translate) => {
    const oldWords = get();
    const newWords = { word, translate };
    const updatedWords = oldWords ? [...oldWords, newWords] : [newWords];
    const hasWord = find(word);

    if (!hasWord) {
      setLocalStorage('hl-translate', updatedWords);
    }
  };

  const remove = word => {
    const hasWord = find(word);
    if (!hasWord) return;

    const updatedWords = [...filter(word)];
    setLocalStorage('hl-translate', updatedWords);
  };

  return {
    remove,
    find,
    add,
  };
};

module.exports = wordsStore();
