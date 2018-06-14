function isFrogHidden() {
    const frog = document.getElementById('frog')
    const style = window.getComputedStyle(frog)
    frog.style.display = (style.display === 'none') ? 'block' : 'none'
}

function fireContentScript() {
    console.log('fire')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { fireContentScript: true, type: 'fireContentScript' })
    })
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clickMe').addEventListener("click", isFrogHidden)
    document.getElementById('fireContentScript').addEventListener("click", fireContentScript)
})
