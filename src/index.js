import getSelected from "./utils/get-selected";

const configTranslate = {
  key: "AIzaSyDCBDC0XEnIJ4Pjf5tjp0J0MdweYzV8NgI",
  language: "pt"
};

const { translate, detectLanguage } = require("google-translate")(
  configTranslate.key
);

export default (() => {
  const popupOutputTranslate = document.createElement("div");
  popupOutputTranslate.setAttribute("class", "popup-translate");
  popupOutputTranslate.setAttribute("opened", "true");
  popupOutputTranslate.innerHTML = `
    <small></small>
    <span class="arrow-down"></span>
    `;

  document.body.appendChild(popupOutputTranslate);

  const elemToInsertTranslate = popupOutputTranslate.querySelector("small");

  function documentMouseUp(e) {
    let highLightedText = getSelected(e.target.tagName);
    if (!highLightedText) {
      popupOutputTranslate.classList.remove("is-active");
      return;
    }

    detectLanguage(highLightedText, (err, detection) => {
      if (detection.language === "en") {
        translate(highLightedText, configTranslate.language, function(
          err,
          translation
        ) {
          let selected = document.getSelection();
          let rangeT = selected.getRangeAt();

          let rectT = rangeT.getBoundingClientRect();

          popupOutputTranslate.classList.add("is-active");
          popupOutputTranslate.style.left = `${rectT.x}px`;
          popupOutputTranslate.style.top = `${e.y}px`;

          elemToInsertTranslate.textContent = `${translation.translatedText}`;
        });
      }
    });
  }

  function windowClicked() {
    popupOutputTranslate.classList.remove("is-active");
  }

  function windowScroll() {
    popupOutputTranslate.classList.remove("is-active");
  }

  document.addEventListener("mouseup", documentMouseUp);
  window.addEventListener("click", windowClicked);
  window.addEventListener("scroll", windowScroll);
  window.removeEventListener("scroll", windowScroll);
})();
