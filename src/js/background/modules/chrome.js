export default {
  browserActionSetIcon(state, tabId) {
    let path = '';
    if (state === 'on') {
      path = chrome.extension.getURL('icons/16-on.png');
    } else {
      path = chrome.extension.getURL('icons/16.png');
    }
    chrome.browserAction.setIcon({
      path,
      tabId,
    });
  },
  browserActionSetIconOnLoadPage() {
    chrome.storage.sync.get(['plugin_hl-t'], response => {
      const { enable, preffixCountry } = response['plugin_hl-t'];

      if (enable) {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs =>
          this.browserActionSetIcon('on', tabs[0].id)
        );
      } else {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs =>
          this.browserActionSetIcon('off', tabs[0].id)
        );
      }
    });
  },
  sendMessageIsEnablePlugin(enable) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { enable });
    });
  },
};
