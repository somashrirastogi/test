$( document ).ready(function() {
    loadScript()
})
fetch('./pdf/pdf.html', {
    method: 'GET'
}).then(value => {
    const n = value.body.getReader();
    n.read().then(x => {
        try {
            var str = String.fromCharCode.apply(null, x['value']);
            document.body.innerHTML += `<div id="pdf-Modal"></div>`
            var temp = document.getElementById('pdf-Modal');
            temp.innerHTML = str
        }
        catch {
        }
    })
}).catch(e => { console.log(e); failureToast("Cannot get Content") })
function loadScript() {
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://documentcloud.adobe.com/view-sdk/main.js";
    
    head.appendChild(script);
}
function showPdf(url) {
    $('#exampleModalCenter').modal('show');
    document.getElementById('pdf-js-viewer').src='pdfjs-2.7.570-dist/web/viewer.html?file='+url
}
if (window.addEventListener) {
    window.addEventListener("message", onMessage, false);        
} else if (window.attachEvent) {
    window.attachEvent("onmessage", onMessage, false);
}

function onMessage(event) {
    var data = event.data;
    if (typeof(window[data.func]) == "function") {
        window[data.func].call(null, data.message);
    }
}

// Function to be called from iframe
function updateIframeHeight(newHeight) {
    $('#exampleModalCenter').modal('hide');
}