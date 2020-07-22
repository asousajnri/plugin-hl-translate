const composition = (...functions) => valor => {
  return functions.reduce((accumulatorValue, fn) => fn(accumulatorValue), valor);
};
