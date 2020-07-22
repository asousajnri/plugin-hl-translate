import './modules/startStorage';

chrome.browserAction.onClicked.addListener(tab => {
  const tabId = tab.id;

  chrome.storage.sync.get(['plugin_hl-t'], response => {
    const { enable, preffixCountry } = response['plugin_hl-t'];

    let pathURLFavicon = '';

    if (enable) {
      pathURLFavicon = chrome.extension.getURL('icons/16-on.png');
      chrome.storage.sync.set({ 'plugin_hl-t': { ...response['plugin_hl-t'], enable: false } });
    } else {
      pathURLFavicon = chrome.extension.getURL('icons/16.png');
      chrome.storage.sync.set({ 'plugin_hl-t': { ...response['plugin_hl-t'], enable: true } });
    }

    chrome.browserAction.setIcon({
      path: pathURLFavicon,
    });
  });
});
