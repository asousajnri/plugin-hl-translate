// REFERENCE:
// https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript
// http://jsfiddle.net/yahvq5mc/

const hlTranslate = () => {
  const renderPopup = () => {
    const popup = document.createElement("DIV");
    const popupText = document.createElement("P");
    const popupArrow = document.createElement("SPAN");

    popup.appendChild(popupArrow);
    popup.appendChild(popupText);

    popup.setAttribute("class", "popup-hl");
    popupArrow.setAttribute("class", "arrow-down");

    document.body.appendChild(popup);

    return {
      popup,
      popupText,
    };
  };

  const { popup, popupText } = renderPopup();

  const translate = (target) => async (word) => {
    const key = "AIzaSyDCBDC0XEnIJ4Pjf5tjp0J0MdweYzV8NgI";
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2/?key=${key}`,
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          q: [word],
          target: target,
        }),
      }
    );

    const { data } = await response.json();

    return {
      sourceLanguage: data.translations[0].detectedSourceLanguage,
      text: data.translations[0].translatedText,
    };
  };

  const getSelectedText = () => {
    if (window.getSelection) {
      return window.getSelection();
    } else if (document.getSelection) {
      return document.getSelection();
    } else if (document.selection) {
      return document.selection.createRange().text;
    }
  };

  const isTag = (tagTarget) => {
    return ["p", "h1", "h2", "span", "b", "em"].filter(
      (tag) => tagTarget.toUpperCase() === tag.toUpperCase()
    );
  };

  document.addEventListener("mouseup", async (e) => {
    const tagMouseuped = e.target;
    if (!isTag(tagMouseuped.tagName).length) return;

    const selectedText = getSelectedText();
    if (!selectedText.toString()) return;

    const translatePortuguese = translate("pt");
    const { sourceLanguage, text } = await translatePortuguese(
      selectedText.toString()
    );

    if (sourceLanguage !== "en") return;

    if (selectedText.getRangeAt(0) !== 0) {
      let rangeT = selectedText.getRangeAt(0);
      let rectT = rangeT.getBoundingClientRect();

      popupText.innerHTML = text;
      popup.classList.add("is-active");

      popup.style.top = `${rectT.y}px`;
      popup.style.left = `${
        rectT.x + rectT.width / 2 - popup.clientWidth / 2
      }px`;
    }
  });

  const closePopup = () => {
    popup.classList.remove("is-active");
    popupText.innerHTML = "";
  };

  document.addEventListener("click", (e) =>
    e.target !== popup ? closePopup() : null
  );

  document.addEventListener("scroll", (e) => closePopup());
};

hlTranslate();
