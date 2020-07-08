export default {
  isApprovedTag(tagTarget) {
    return ['p', 'h1', 'h2', 'span', 'b', 'em', 'code', 'a'].filter(
      tag => tagTarget.toUpperCase() === tag.toUpperCase()
    );
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
};
