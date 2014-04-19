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
        xml,
        stuff;
    
    xml = xml.firstChild;
    for (var a=0; a < xml.childElementCount; a++) {
        child = xml.childNodes[a].nextElementSibling;
        key = child.getElementsByTagName("artist")[0].innerHTML;
        if(obj[key] !== obj[key]) {
            obj[key] = {};
            obj[key]["plays"] = parseInt(child.getElementsByTagName("playcount")[0].innerHTML);
            obj[key]["songs"] = [];
            obj[key]["songs"].push(child.getElementsByTagName("name")[0].innerHTML);
        } else {
            
            obj[key]["plays"] = obj[key]["plays"] + parseInt(child.getElementsByTagName("playcount")[0].innerHTML);
            obj[key]["songs"].push(child.getElementsByTagName("name")[0].innerHTML);
        }
    }
    
    displayResults(obj);
}

function displayResults(obj) {
    var div,
        p,
        a = [];
    var tPlays,
        tArtist;
    
    for (var key in obj) {
        if (obj[key]["plays"].toString() !== "NaN" && obj[key]["plays"] > 4) {
            a.push({
                "artist":key,
                "plays":obj[key]["plays"],
                "songs":obj[key]["songs"]
            });
        }
    }
        
    for (var x=0; x < a.length; x++) {
        for (var y=x; y < a.length; y++) {
            if (a[y].plays > a[x].plays) {
                tPlays = a[y].plays;
                tArtist = a[y].artist;
                
                a[y].plays = a[x].plays;
                a[y].artist = a[x].artist;
            
                a[x].plays = tPlays;
                a[x].artist = tArtist;
            }
        }
    }
    
    for(var x=0; x < a.length; x++) {
        div = document.createElement("div");
        div.setAttribute("style","display:block; height:50px; width:" + a[x].plays*38 + "px; background-color:#3498db");
        p = document.createElement("p");
        p.innerHTML = a[x].artist + " &#8212; " + a[x].plays;
        div.appendChild(p);
        document.body.appendChild(div);
    }
}

window.onload = loadDocument();