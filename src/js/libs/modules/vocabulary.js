import api from '../../../api';

export default {
  async index() {
    const words = await api.get('vocabulary');

    return words.data;
  },
  async store(words) {
    await api.post('vocabulary-add', { words });
  },
};
