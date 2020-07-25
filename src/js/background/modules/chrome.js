export default {
  browserActionSetIcon(statePlugin, tabId) {
    const path = chrome.extension.getURL(`icons/16${statePlugin ? '-on' : ''}.png`);
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
  sendMessageIsEnablePlugin(renderHTMLPopupOnPage) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { renderHTMLPopupOnPage });
    });
  },
  pluginIsActive(statePlugin, tabId) {
    this.browserActionSetIcon(statePlugin, tabId);
    this.sendMessageIsEnablePlugin(statePlugin);
  },
};
