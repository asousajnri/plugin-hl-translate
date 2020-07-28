import './modules/startStorage';

import chromeMethods from './modules/chrome';

const hasTabSaved = (colleTabs = [], tabId) => {
  const colleTabsFiltered = colleTabs.filter(tab => tab.tabId === tabId);

  if (colleTabsFiltered.length > 0) {
    return true;
  } else {
    return false;
  }
};

const addTabPluginIsActive = (states, tabId) => {
  const newState = {
    ...states,
    tabsPluginIsActive: [...states.tabsPluginIsActive, { tabId: tabId, pluginIsActive: true }],
  };

  chrome.storage.sync.set({ 'plugin_hl-t': newState });
};

const removeTabPluginIsActive = (states, tabId) => {
  const newState = {
    ...states,
    tabsPluginIsActive: [...states.tabsPluginIsActive.filter(tab => tab.tabId !== tabId)],
  };

  chrome.storage.sync.set({ 'plugin_hl-t': newState });
};

const updateTabPluginIsActive = (states, tabId, newStateIsActive) => {
  const newState = {
    ...states,
    tabsPluginIsActive: [
      ...states.tabsPluginIsActive.filter(tab => tab.tabId !== tabId),
      { tabId: tabId, pluginIsActive: newStateIsActive },
    ],
  };

  chrome.storage.sync.set({ 'plugin_hl-t': newState });
};

const pluginIsActiveOnStartPage = tabId => {
  chrome.storage.sync.get(['plugin_hl-t'], response => {
    const { tabsPluginIsActive } = response['plugin_hl-t'];
    tabsPluginIsActive.map(tabStorage => {
      if (tabId === tabStorage.tabId) {
        chromeMethods.pluginIsActive(tabStorage.pluginIsActive, tabStorage.tabId);
      }
    });
  });
};

const firedActiveTabOnClick = tab => {
  if (tab.tabId === id) {
    if (tab.pluginIsActive) {
      chromeMethods.pluginIsActive(false, tab.tabId);
      updateTabPluginIsActive(states, tab.tabId, false);
    } else {
      chromeMethods.pluginIsActive(true, tab.tabId);
      updateTabPluginIsActive(states, tab.tabId, true);
    }
  }
};

chrome.tabs.onUpdated.addListener((tabIdOnUpdated, info) => {
  if (info.status === 'complete') {
    pluginIsActiveOnStartPage(tabIdOnUpdated);
  }
});

chrome.tabs.onCreated.addListener(({ id }) => {
  pluginIsActiveOnStartPage(id);
});

chrome.tabs.onRemoved.addListener(tabId => {
  chrome.storage.sync.get(['plugin_hl-t'], response => {
    const states = response['plugin_hl-t'];
    removeTabPluginIsActive(states, tabId);
  });
});

chrome.browserAction.onClicked.addListener(({ id }) => {
  chrome.storage.sync.get(['plugin_hl-t'], response => {
    const states = response['plugin_hl-t'];
    const { tabsPluginIsActive } = states;

    if (!hasTabSaved(tabsPluginIsActive, id)) {
      addTabPluginIsActive(states, id);
      chromeMethods.pluginIsActive(true, id);
    }

    tabsPluginIsActive.map(firedActiveTabOnClick);
  });
});
