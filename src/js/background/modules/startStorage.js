export default (() => {
  chrome.storage.sync.get(['plugin_hl-t'], response => {
    if (!response['plugin_hl-t']) {
      const initialStates = {
        enable: false,
        preffixCountry: 'en',
      };

      chrome.storage.sync.set({ 'plugin_hl-t': initialStates });
    }
  });
})();
