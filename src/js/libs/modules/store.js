const operators = require('./operators');
const storage = require('./storage');

const store = () => {
  const filter = word => operators.filter(get(), word);
  const find = word => operators.find(get(), word);
  const hasWord = word => operators.hasWord(find(word));
  const remove = word => set(filter(word));
  const get = () => storage.get('hl-translate');
  const set = value => storage.set('hl-translate', value);

  const add = (word, translate) => {
    const oldWords = get();
    const newWords = { word, translate };
    const updatedWords = oldWords ? [...oldWords, newWords] : [newWords];

    if (!hasWord(word)) {
      set(updatedWords);
    }
  };

  return {
    remove,
    find,
    hasWord,
    add,
  };
};

module.exports = store();
