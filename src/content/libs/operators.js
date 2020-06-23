module.exports = {
  isApprovedTag: tagTarget => {
    return ['p', 'h1', 'h2', 'span', 'b', 'em'].filter(
      tag => tagTarget.toUpperCase() === tag.toUpperCase()
    );
  },
};
