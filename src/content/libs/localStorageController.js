const localStorageController = () => {
  const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const get = key => JSON.parse(localStorage.getItem(key)) || [];

  return {
    get,
    set,
  };
};

module.exports = localStorageController();
