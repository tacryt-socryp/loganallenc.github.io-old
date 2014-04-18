function loadDocument() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        parseDocument(xhr.responseXML);
    }
    xhr.onerror = function() {
        console.log("Error while getting XML.");
    }
    xhr.open("GET", "http://ws.audioscrobbler.com/2.0/user/loganfynne/weeklytrackchart.xml");
    xhr.responseType = "document";
    xhr.send();
}

function parseDocument(xml) {   
    var obj = {};
    var key,
        child,
        xml;
    
    xml = xml.firstChild;
    for (var a=0; a < xml.childElementCount; a++) {
        child = xml.childNodes[a].nextElementSibling;
        key = child.firstElementChild.innerHTML;
        if(obj[key] !== obj[key]) {
            obj[key] = parseInt(child.getElementsByTagName("playcount")[0].innerHTML);
        } else {
            obj[key] = obj[key] + parseInt(child.getElementsByTagName("playcount")[0].innerHTML);
        }
    }
    
    displayResults(obj);
    
    console.log(obj);
}

function displayResults(obj) {
    var div,
        p;
    
    for (var key in obj) {
        if (obj[key].toString() !== "NaN") {
            if (obj[key] > 5) {
                div = document.createElement("div");
                div.setAttribute("style","display:block; height:50px; width:" + obj[key]*35 + "px; background-color:#3498db");
                p = document.createElement("p");
                p.innerHTML = key;
                div.appendChild(p);
                document.body.appendChild(div);
            }
        }
    }
    
    for (var x = 0; x < document.body.children.length; x++) {
        console.log(element);
    }
}

window.onload = loadDocument();