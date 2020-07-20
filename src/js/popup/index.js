import renderFlags from './modules/renderFlags';
import isSelectedFlag from './modules/isSelectedFlag';
import persist from './modules/persist';

(() => {
  const states = persist.get();
  const flagsItemLanguage = renderFlags();
  const enableSwitcher = document.querySelector('.enable__switch input');

  enableSwitcher.checked = states.enable;

  enableSwitcher.addEventListener('click', () => {
    persist.set({ ...states, enable: enableSwitcher.checked });
  });

  flagsItemLanguage.map(flag => {
    const flagPreffix = flag.flagPreffix;
    const flagItemHTML = flag.flagItemHTML;

    if (flagPreffix === states.isSelectedFlag) {
      flagItemHTML.classList.add('is-selected');
    }

    flagItemHTML.addEventListener('click', () => {
      isSelectedFlag(flagsItemLanguage, flagItemHTML);
      persist.set({ ...states, isSelectedFlag: flagPreffix });
    });
  });
})();
