import renderFlags from './modules/renderFlags';
import isSelectedFlag from './modules/isSelectedFlag';

(() => {
  const flagsItemLanguage = renderFlags();

  flagsItemLanguage.map(flag =>
    flag.flagItemHTML.addEventListener('click', function () {
      isSelectedFlag(flagsItemLanguage, this);
    })
  );

  console.log(flagsItemLanguage);
})();
