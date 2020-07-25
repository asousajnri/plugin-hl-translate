export default (() => {
  chrome.storage.sync.get(['plugin_hl-t'], response => {
    const states = response['plugin_hl-t'];
    if (!states) {
      const initialStates = {
        preffixCountry: 'pt',
        tabsPluginIsActive: [],
      };

      chrome.storage.sync.set({ 'plugin_hl-t': initialStates });
    }
  });
})();
