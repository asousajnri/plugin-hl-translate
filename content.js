const { translate, detectLanguage } = require("google-translate")(
  'AIzaSyDCBDC0XEnIJ4Pjf5tjp0J0MdweYzV8NgI'
);

const HTL = (() => {
	const VALID_TAGS = ["P", "EM", "ADRESS", "H1", "H2", "H3", "H4", "H5", "A", "B", "DIV", "STRONG", "LI"];

	const _mountPopupInPage = () => {
		const POPUP_HTL = document.createElement("div");
		
		POPUP_HTL.setAttribute("class", "popup-translate");
		POPUP_HTL.setAttribute("opened", "true");
		
		POPUP_HTL.innerHTML = `
	    <small></small>
	    <span class="arrow-down"></span>
    `;

	  document.body.appendChild(POPUP_HTL); 
	  
	  const INSERT_TO_TRANSLATE = POPUP_HTL.querySelector("small");
	  
	  return {
		  POPUP_HTL,
		  INSERT_TO_TRANSLATE
	  }
	};
	
	const _getSelected = (elemTagName) => {
		let mouseUpTagValid = VALID_TAGS.filter(tag => {
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
	
	const _documentMouseUp = (e, popoup, targetInsertTranslate) => {
    let highLightedText = _getSelected(e.target.tagName);
    
    if (!highLightedText) {
      popoup.classList.remove("is-active");
      return;
    }

    detectLanguage(highLightedText, (err, detection) => {
      if (detection.language === "en") {
        translate(highLightedText, 'pt', function(
          err,
          translation
        ) {
          let t = document.getSelection();
					let rangeT = t.getRangeAt(0);
					let rectT = rangeT.getBoundingClientRect();

          popoup.classList.add("is-active");
          popoup.style.left = `${rectT.x}px`;
          popoup.style.top = `${e.y}px`;

          targetInsertTranslate.textContent = `${translation.translatedText}`;
        });
      }
    });
  }

	
	const _init = () => {
		const { POPUP_HTL, INSERT_TO_TRANSLATE } = _mountPopupInPage();
		
		document.addEventListener("mouseup", (e) => _documentMouseUp(e, POPUP_HTL, INSERT_TO_TRANSLATE));
		
		window.addEventListener("click", () => POPUP_HTL.classList.remove("is-active"));
		window.addEventListener("scroll", () => POPUP_HTL.classList.remove("is-active"));
	};
	
	return {
		init: _init
	};
})();

HTL.init();