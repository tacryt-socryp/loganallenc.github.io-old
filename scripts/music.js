function loadDocument() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        console.log(xhr.responseXML.documentElement.nodeName);
    }
    xhr.onerror = function() {
        console.log("Error while getting XML.");
    }
    xhr.open("GET", "http://ws.audioscrobbler.com/2.0/user/loganfynne/weeklytrackchart.xml");
    xhr.responseType = "document";
    xhr.send();
}

function parseDocument() {

}

window.onload = loadDocument();