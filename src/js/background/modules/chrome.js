export default {
  browserActionSetIcon(statePlugin, tabId) {
    const path = chrome.extension.getURL(`icons/16${statePlugin ? '-on' : ''}.png`);
    chrome.browserAction.setIcon({
      path,
      tabId,
    });
  },
  sendMessageIsEnablePlugin(tabId, isEnablePlugin) {
    chrome.tabs.sendMessage(tabId, { isEnablePlugin });
  },
  pluginIsActive(statePlugin, tabId) {
    this.browserActionSetIcon(statePlugin, tabId);
    this.sendMessageIsEnablePlugin(tabId, statePlugin);
  },
};
