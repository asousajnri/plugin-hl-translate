export default {
  listenerStatesFromPopup(reloadStartFn) {
    chrome.runtime.onMessage.addListener(({ states }, ...args) => {
      localStorage.setItem('plugin_hl-t', JSON.stringify(states));
      reloadStartFn();
    });
  },
};
