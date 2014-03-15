for (var layerGroupName in PSD) {
    window[layerGroupName] = PSD[layerGroupName];
}

for (var layerGroupName in PSD) {
 PSD[layerGroupName].originalFrame = window[layerGroupName].frame;
}

/*Splash.placeBefore(Home);

var fade = new Animation({
		view: Splash,
		properties:{opacity:0},
		curve: "linear",
		time: 2000
});

fade.on("end", showHome());
fade.start();*/

function showHome() {
    Home.placeBefore(Splash);
}

showHome();

Home.on("click", function(event) {
    console.log(event);
    if (event.x < 510 && event.y < 100) {         
        Menu.placeBefore(Home);
    }
});

Menu.on("click", function(event) {
    if (event.x < 510 && event.y > 100 && event.y < 200) {
        Edit.placeBefore(Menu);
    } else if ((event.x < 510 && event.y < 100) || (event.x > 510)) {
        Home.placeBefore(Menu);
    }
});

Edit.on("click", function(event) {
    if (event.x < 510 && event.y < 100) {
        Menu.placeBefore(Edit);
    } else if (event.y > 1000) {
        Home.placeBefore(Edit);
    }
    
});