const renderHtml = () => {
	const popup = document.createElement("div");
		
	popup.setAttribute("class", "popup-hl");
	popup.setAttribute("opened", "true");
	
	popup.innerHTML = `
    <small></small>
    <span class="arrow-down"></span>
  `;

  document.body.appendChild(popup); 
  
  const elementToTextTranslated = popup.querySelector("small");
  
  return {
	  popup,
	  elementToTextTranslated
  }
};

export default renderHtml;