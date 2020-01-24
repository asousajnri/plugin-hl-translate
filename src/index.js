const configAPI = {
  key: "AIzaSyDCBDC0XEnIJ4Pjf5tjp0J0MdweYzV8NgI",
  language: "pt"
};

const { translate } = require("google-translate")(configAPI.key);

// https://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text
// http://jsfiddle.net/PQbb7/7/
// https://www.cssscript.com/text-selection-popup-pure-javascript/

export default (() => {
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
    "B"
  ];

  const getSelected = elemTagName => {
    let mouseUpTagValid = validTags.filter(tag => {
      return elemTagName === tag;
    });

    if (mouseUpTagValid.length !== 0) {
      if (window.getSelection) {
        return window.getSelection();
      } else if (document.getSelection) {
        return document.getSelection();
      } else {
        var selection = document.selection && document.selection.createRange();
        if (selection.text) {
          return selection.text;
        }
        return false;
      }
    }
  };

  document.addEventListener("mouseup", e => {
    let highLightedText = getSelected(e.target.tagName);

    let p = document.createElement("p");
    p.textContent = select;

    document.body.appendChild(p);
  });
})();
