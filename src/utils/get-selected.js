const validTags = [
  "P",
  "EM",
  "ADRESS",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "A",
  "B",
  "STRONG"
];

export default elemTagName => {
  let mouseUpTagValid = validTags.filter(tag => {
    return elemTagName === tag;
  });

  if (mouseUpTagValid.length !== 0) {
    if (window.getSelection) {
      let text = window
        .getSelection()
        .toString()
        .trim();

      if (text.length === 0) return false;

      return text;
    }
  } else {
    return false;
  }
};
