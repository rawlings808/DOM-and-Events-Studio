// Write your JavaScript code here.
// Remember to pay attention to page loading!

// add load event handler to window

window.addEventListener("load", function () {

    // HTML Elements
    let takeoff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");

    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
    takeoff.addEventListener("click", function () {
        if (flightStatus.innerText !== "Shuttle in flight.") {
            console.log("Confirm that the shuttle is ready for takeoff.");
            window.confirm("Confirm that the shuttle is ready for takeoff.");
            flightStatus.innerText = String("Shuttle in flight.");
            console.log(flightStatus);
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerText = Number(spaceShuttleHeight.innerText) + 10000;
        } else {
            console.log("Shuttle is already in flight!");
            window.alert("Shuttle is already in flight!");
        }
    });

    landing.addEventListener("click", function () {
        if (flightStatus.innerText === "Shuttle in flight.") {
            window.alert("The shuttle is landing. Landing gear engaged!");
            // flightStatus = "The shuttle has landed!";
            flightStatus.innerText = "The shuttle has landed!";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerText = 0;
        } else {
            console.log("Shuttle is already on the ground.")
            window.alert("You dummy we're on the ground!")
        }
    });

    missionAbort.addEventListener("click", function () {
        window.confirm("Confirm that you want to abort the mission.");
        flightStatus.innerText = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = 0;
    });

});

window.onload

// When the "Abort Mission" button is clicked, the following should happen:
// A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
// The flight status should change to "Mission aborted."
// The background color of the shuttle flight screen should change from blue to green.
// The shuttle height should go to 0.