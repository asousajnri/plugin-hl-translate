import './modules/startStorage';

import chromeMethods from './modules/chrome';

let browserActionIsActive = false;

chrome.browserAction.onClicked.addListener(tab => {
  const tabId = tab.id;

  if (browserActionIsActive) {
    chromeMethods.browserActionSetIcon(false, tabId);
    chromeMethods.sendMessageIsEnablePlugin(false);
    browserActionIsActive = false;
  } else {
    chromeMethods.browserActionSetIcon(true, tabId);
    chromeMethods.sendMessageIsEnablePlugin(true);
    browserActionIsActive = true;
  }
});
