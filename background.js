//this checks for the youtube url with /videos at the end.
chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    if (tab.url && tab.url.includes("/videos")) {
      chrome.tabs.sendMessage( tabId, {
        message: 'new'
      })
    } else {
      chrome.tabs.sendMessage( tabId, {
        message: 'no'
      })
    }
  }
);
