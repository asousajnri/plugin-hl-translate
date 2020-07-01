const getSelected = () => {
  const get = () => {
    if (window.getSelection) {
      return window.getSelection();
    } else if (document.getSelection) {
      return document.getSelection();
    } else if (document.selection) {
      return document.selection.createRange().text;
    }
  };

  const objectSelection = get();
  const selectedText = objectSelection.toString();

  return {
    objectSelection,
    selectedText,
  };
};

export default getSelected;
