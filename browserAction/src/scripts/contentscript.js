chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('content script !!!!!!!!!!!!!!!')
    if(message.type === 'fireContentScript') {
        alert('MEssage Received By DOM')
    }     
})
