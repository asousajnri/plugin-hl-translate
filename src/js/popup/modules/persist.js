const persist = () => {
  const get = () => JSON.parse(localStorage.getItem('hl_translate_popup')) || null;
  const set = value => {
    localStorage.setItem('hl_translate_popup', JSON.stringify(value)) || null;
  };

  const initialState = {
    enable: true,
    isSelectedFlag: 'en',
  };

  if (!get()) {
    set(initialState);
  }

  return {
    get,
    set,
  };
};

export default persist();
