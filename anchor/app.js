for (var layerGroupName in PSD) {
    window[layerGroupName] = PSD[layerGroupName];
    console.log(layerGroupName);
}

for (var layerGroupName in PSD) {
 PSD[layerGroupName].originalFrame = window[layerGroupName].frame;
 console.log(layerGroupName);
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


Splash.on("click", function(event) {      
    Home.placeBefore(Splash);
});

Home.on("click", function(event) {
    if (event.x < 510 && event.y < 100) {         
        Menu.placeBefore(Home);
    } else if (event.x > 300  && event.y > 400) {
        Calendar.placeBefore(Home);
    }
});

Calendar.on("click", function(event) {
    if (event.x < 510 && event.y < 100) {         
        Menu.placeBefore(Calendar);
    } else if (event.x > 300  && event.y > 400) {
        Home.placeBefore(Calendar);
    }
});

Menu.on("click", function(event) {
    if ((event.x < 510 && event.y > 100 && event.y < 200) || (event.x > 510)) {
        Home.placeBefore(Menu);
    } else if (event.x < 510 && event.y < 100) {
        //Search.placeBefore(Menu);
    } else if (event.x < 510 && event.y > 200 && event.y < 300) {
        Edit.placeBefore(Menu);
    }
});

Edit.on("click", function(event) {
    if (event.x < 510 && event.y < 100) {
        Menu.placeBefore(Edit);
    } else if (event.y > 1000) {
        Home.placeBefore(Edit);
    }
    
});