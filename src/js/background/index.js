import './modules/startStorage';

chrome.storage.sync.get(['plugin_hl-t'], response => {
  const { enable, preffixCountry } = response['plugin_hl-t'];

  if (enable) {
    chrome.browserAction.setIcon({
      path: chrome.extension.getURL('icons/16-on.png'),
    });
  } else {
    chrome.browserAction.setIcon({
      path: chrome.extension.getURL('icons/16.png'),
    });
  }
});

chrome.browserAction.onClicked.addListener(tab => {
  const tabId = tab.id;

  chrome.storage.sync.get(['plugin_hl-t'], response => {
    const { enable, preffixCountry } = response['plugin_hl-t'];

    let pathURLFavicon = '';

    if (enable) {
      chrome.browserAction.setIcon({
        path: chrome.extension.getURL('icons/16.png'),
      });
      chrome.storage.sync.set({ 'plugin_hl-t': { ...response['plugin_hl-t'], enable: false } });
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { enable: false });
      });
    } else {
      chrome.browserAction.setIcon({
        path: chrome.extension.getURL('icons/16-on.png'),
      });
      chrome.storage.sync.set({ 'plugin_hl-t': { ...response['plugin_hl-t'], enable: true } });
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { enable: true });
      });
    }
  });
});
