import translate from './libs/translate';

import renderHtml from './libs/renderHtml';

(function HLT() {
	const { popup, elementToTextTranslated } = renderHtml();
	
	document.addEventListener('mouseup', e => {
		const highLightedText = document.getSelection();
	    
	  if (highLightedText.toString().length === 0) {
	    popup.classList.remove("is-active");
	    
	    return;
	  }
	  
		translate(highLightedText.toString(), translatedText => {
			let rangeT = highLightedText.getRangeAt(0);
			let rectT = rangeT.getBoundingClientRect();
	
			popup.style.top = `${rectT.y}px`;
			popup.style.left = `${rectT.x - popup.clientWidth / 2 + rectT.width / 2}px`;
			
			popup.classList.add("is-active");
			
	    elementToTextTranslated.textContent = `${translatedText}`;
		})
	});
	
	window.addEventListener("click", () => popup.classList.remove("is-active"));
	window.addEventListener("scroll", () => popup.classList.remove("is-active"));
})();