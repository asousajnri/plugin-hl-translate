const composition = (...functions) => valor => {
  return functions.reduce((acc, fn) => fn(acc), valor);
};

export default composition;
