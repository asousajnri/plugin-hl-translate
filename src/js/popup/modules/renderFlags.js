import { flags } from '../../libs';

export default () => {
  const languages = document.querySelector('.languages__list');
  const languagesItems = [];

  for (let flag in flags) {
    let itemList = document.createElement('LI');
    let itemListImage = document.createElement('IMG');

    itemListImage.setAttribute(
      'src',
      chrome.extension.getURL(`images/flags/${flags[flag].image}.png`)
    );

    itemList.appendChild(itemListImage);
    languages.appendChild(itemList);
    languagesItems.push({ flagPreffix: flags[flag].preffix, flagItemHTML: itemList });
  }

  return languagesItems;
};
