const R = require('ramda');

const { find: findOperator, filter: filterOperator } = require('./operators');
const { get: getLocalStorage, set: setLocalStorage } = require('./storage');

const store = () => {
  const filter = wordToCompare => filterOperator(get(), wordToCompare);
  const find = word => findOperator(get(), 'word', word);

  const get = () => getLocalStorage('hl-translate');
  const set = value => setLocalStorage('hl-translate', value);

  const add = (word, translate) => {
    const oldWords = get();
    const newWords = { word, translate };
    const updatedWords = oldWords ? [...oldWords, newWords] : [newWords];
    const hasWord = find(word);

    if (!hasWord) {
      set(updatedWords);
    }
  };

  const remove = word => {
    const hasWord = find(word);
    if (!hasWord) return;

    const updatedWords = [...filter(word)];
    set(updatedWords);
  };

  return {
    remove,
    find,
    add,
  };
};

module.exports = store();
