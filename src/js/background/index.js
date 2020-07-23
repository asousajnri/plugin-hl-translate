import './modules/startStorage';

import chromeMethods from './modules/chrome';

let browserActionIsActive = false;

chrome.browserAction.onClicked.addListener(tab => {
  const tabId = tab.id;

  if (browserActionIsActive) {
    chromeMethods.browserActionSetIcon('off', tabId);
    chromeMethods.sendMessageIsEnablePlugin(false);
    browserActionIsActive = false;
  } else {
    chromeMethods.browserActionSetIcon('on', tabId);
    chromeMethods.sendMessageIsEnablePlugin(true);
    browserActionIsActive = true;
  }
});
