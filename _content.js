const { translate, detectLanguage } = require("google-translate")(
  'AIzaSyDCBDC0XEnIJ4Pjf5tjp0J0MdweYzV8NgI'
);

const HTL = (() => {
	const VALID_TAGS = ["P", "EM", "ADRESS", "H1", "H2", "H3", "H4", "H5", "A", "B", "DIV", "STRONG", "LI"];

	const _mountPopupInPage = () => {
		const POPUP_HTL = document.createElement("div");
		
		POPUP_HTL.setAttribute("class", "popup-hl");
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
	
	const _documentMouseUp = (e, popup, targetInsertTranslate) => {
    //let highLightedText = _getSelected(e.target.tagName);
    
    const highLightedText = document.getSelection();
    
    if (highLightedText.toString().length === 0) {
      popup.classList.remove("is-active");
      return;
    }

    detectLanguage(highLightedText.toString(), (err, detection) => {
      if (detection.language === "en") {
	      const text = highLightedText.toString();
	      
        translate(text, 'pt', function(
          err,
          translation
        ) {
					let rangeT = highLightedText.getRangeAt(0);
					let rectT = rangeT.getBoundingClientRect();

					popup.style.top = `${rectT.y}px`;
					popup.style.left = `${rectT.x - popup.clientWidth / 2 + rectT.width / 2}px`;
					
					popup.classList.add("is-active");
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