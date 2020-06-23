const wordsStore = () => {
  const getWords = () => JSON.parse(localStorage.getItem('hl-translate')) || [];
  const saveWords = (word, translate) => {
    const newWords = { word, translate };
    const words = getWords() ? [...getWords(), newWords] : [newWords];

    localStorage.setItem('hl-translate', JSON.stringify(words));
  };

  return {
    getWords,
    saveWords,
  };
};

module.exports = wordsStore();
