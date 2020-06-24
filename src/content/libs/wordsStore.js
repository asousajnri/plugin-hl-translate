const wordsStore = () => {
  const search = wordToCompare => get().filter(word => word.word === wordToCompare);
  const filter = wordToCompare => get().filter(word => word.word !== wordToCompare);
  const get = () => JSON.parse(localStorage.getItem('hl-translate')) || [];

  const save = (word, translate) => {
    const newWords = { word, translate };
    const words = get() ? [...get(), newWords] : [newWords];
    localStorage.setItem('hl-translate', JSON.stringify(words));
  };

  const remove = word => {
    const words = get() ? [...filter(word)] : [newWords];
    localStorage.setItem('hl-translate', JSON.stringify(words));
  };

  return {
    remove,
    search,
    filter,
    get,
    save,
  };
};

module.exports = wordsStore();
