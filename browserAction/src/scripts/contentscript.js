chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.type === 'fireContentScript') {
        alert('Message Received By Page')
        var btn = document.createElement("H1") 
        var t = document.createTextNode("Here is a H1 injected by the Chrome Extension")      
        btn.appendChild(t)
        document.body.prepend(btn)
    }     
})
