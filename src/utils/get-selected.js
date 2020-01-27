const validTags = ["P", "EM", "ADRESS", "H1", "H2", "H3", "H4", "H5", "A", "B"];

export default elemTagName => {
  let mouseUpTagValid = validTags.filter(tag => {
    return elemTagName === tag;
  });

  if (mouseUpTagValid.length !== 0) {
    if (window.getSelection) return window.getSelection();
  } else if (document.getSelection) {
    return document.getSelection();
  } else {
    var selection = document.selection && document.selection.createRange();
    if (selection.text) {
      return selection.text;
    }
    return false;
  }
};
