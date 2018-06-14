chrome.tabs.onUpdated.addListener(function(id, info, tab){
    if (/google[.]co[.]uk/.test(tab.url)) {
        chrome.pageAction.show(tab.id)
    }
})