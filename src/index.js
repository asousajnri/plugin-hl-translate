const configTranslate = {
  key: "AIzaSyDCBDC0XEnIJ4Pjf5tjp0J0MdweYzV8NgI",
  language: "pt"
};

const { translate } = require("google-translate")(configTranslate.key);
import getSelected from "./utils/get-selected";

export default (() => {
  const popupOutputTranslate = document.createElement("div");
  popupOutputTranslate.setAttribute("class", "popup-translate");
  popupOutputTranslate.innerHTML = `
    <small></small>
    <span class="arrow-down"></span>
  `;

  document.body.appendChild(popupOutputTranslate);

  const elemToInsertTranslate = popupOutputTranslate.querySelector("small");

  document.addEventListener("mouseup", e => {
    let highLightedText = getSelected(e.target.tagName).toString();

    if (highLightedText) {
      translate(highLightedText, configTranslate.language, function(
        err,
        translation
      ) {
        let t = document.getSelection();
        let rangeT = t.getRangeAt(0);
        let rectT = rangeT.getBoundingClientRect();

        popupOutputTranslate.classList.add("is-active");
        popupOutputTranslate.style.left = `${rectT.x}px`;
        popupOutputTranslate.style.top = `${e.y}px`;

        elemToInsertTranslate.textContent = `${translation.translatedText}`;
      });
    } else {
      popupOutputTranslate.classList.remove("is-active");
    }
  });
})();
