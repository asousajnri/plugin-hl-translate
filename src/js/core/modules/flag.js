export const flags = {
  italy: {
    preffix: 'it',
    image: '011-italy',
  },
  wales: {
    preffix: 'cy',
    image: '017-wales',
  },
  japan: {
    preffix: 'ja',
    image: '033-japan',
  },
  north_korea: {
    preffix: 'ko',
    image: '037-north-korea',
  },
  france: {
    preffix: 'fr',
    image: '077-france',
  },
  usa: {
    preffix: 'en',
    image: '153-united-states-of-america',
  },
  germanny: {
    preffix: 'de',
    image: '066-germany',
  },
  south_korea: {
    preffix: 'ko',
    image: '055-south-korea',
  },
  sweden: {
    preffix: 'sv',
    image: '073-sweden',
  },
  poland: {
    preffix: 'pl',
    image: '108-poland',
  },
  russo: {
    preffix: 'ru',
    image: '228-russia',
  },
  brazil: {
    preffix: 'pt',
    image: '250-brazil',
  },
  servia: {
    preffix: 'sr',
    image: '035-serbia',
  },
  eslovenia: {
    preffix: 'sl',
    image: '004-slovenia',
  },
  eslovakia: {
    preffix: 'sk',
    image: '045-slovakia',
  },
  espanha: {
    preffix: 'es',
    image: '044-spain',
  },
  africa_do_sul: {
    preffix: 'af',
    image: '075-south-africa',
  },
  albania: {
    preffix: 'sq',
    image: '117-albania',
  },
  arabe: {
    preffix: 'ar',
    image: '068-united-arab-emirates',
  },
  bosnio: {
    preffix: 'bs',
    image: '113-bosnia-and-herzegovina',
  },
  bulgaria: {
    preffix: 'bg',
    image: '135-bulgaria',
  },
  filandia: {
    preffix: 'fi',
    image: '052-finland',
  },
  filandia: {
    preffix: 'fi',
    image: '052-finland',
  },
  grecia: {
    preffix: 'el',
    image: '071-greece',
  },
};

export const flagGetImageUrl = flagSelected => {
  for (let flag in countriesFlag) {
    if (countriesFlag[flag].preffix === flagSelected) {
      return chrome.extension.getURL(`images/flags/${countriesFlag[flag].image}.png`);
    }
  }
};

export const flagIsActive = (flagsListingItems, flagActive) => {
  flagsListingItems.map(item => {
    const itemPreffixFlag = item.getAttribute('flag-preffix');

    if (itemPreffixFlag === flagActive) {
      item.classList.add('is-selected');
    } else {
      item.classList.remove('is-selected');
    }
  });
};
