const R = require('ramda');

module.exports = {
  isApprovedTag: tagTarget => {
    return ['p', 'h1', 'h2', 'span', 'b', 'em', 'code', 'a'].filter(
      tag => tagTarget.toUpperCase() === tag.toUpperCase()
    );
  },
  find: (data, key, value) => R.find(R.propEq(key, value))(data),
  filter: (data, valueCompare) => R.filter(value => value.word !== valueCompare, data),
};
