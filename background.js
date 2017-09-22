var toggle = false;
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "message": "clicked_browser_action"
        });
        toggle = !toggle;
        console.log(toggle);
        if (toggle) {
            chrome.browserAction.setIcon({path:"default.png"});
        } else {
            chrome.browserAction.setIcon({path:"icon.png"});
        }
    })
});
