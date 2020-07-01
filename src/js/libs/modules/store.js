import api from '../../../api';

import operators from './operators';
import storage from './storage';

const store = () => {
  const filter = word => operators.filter(get(), word);
  const find = word => operators.find(get(), word);
  const hasWord = word => operators.hasWord(find(word));
  const remove = word => set(filter(word));
  const get = () => storage.get('hl-translate');
  const set = value => storage.set('hl-translate', value);

  const add = async (word, translate) => {
    const oldWords = get();
    const newWords = { word, translate };
    const updatedWords = oldWords ? [...oldWords, newWords] : [newWords];

    if (!hasWord(word)) {
      const resp = await api.get('vocabulary');
      console.log('TESTANDO API: ', resp);

      const teste = await api.post('vocabulary-add', {
        words: updatedWords,
      });

      console.log('TESTE: >> ', teste);
      set(updatedWords);
    }
  };

  return {
    get,
    remove,
    find,
    hasWord,
    add,
  };
};

export default store();
