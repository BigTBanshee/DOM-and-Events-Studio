function init () {
    const abortMission = document.getElementById("missionAbort");
    const button = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const paragraph = document.getElementById("flightStatus");
    const background = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";

    // abortMission.addEventListener("mouseover", function( event ) {
    //     event.target.style.backgroundColor = "red";
    //  });

    button.addEventListener('click', event => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (response) {
            paragraph.innerHTML = 'Shuttle in flight.';
            background.style.backgroundColor = "blue";
            height.innerHTML = '10,000';     
       }
       else {
       }
             });
    
    land.addEventListener('click', event => {
        let response = window.alert("The shuttle is landing. Landing gear engaged.")
        paragraph.innerHTML = 'The shuttle has landed.';
        background.style.backgroundColor = "";
        height.innerHTML = '0'; 
    })

    abortMission.addEventListener('click', event => {
        let response = window.confirm("Confirm that you want to abort the mission.");

        if (response) {
            paragraph.innerHTML = 'Mission aborted.';
            background.style.backgroundColor = "";
            height.innerHTML = '0';     
       }
       else {
       }
             });
    
    right.addEventListener('click', event => {
        rocket.style.left = parseInt(rocket.style.left) + 5 + "px";
    });

    left.addEventListener('click', event => {
        rocket.style.left = parseInt(rocket.style.left) - 5 + "px";
    });

    up.addEventListener('click', event => {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 5 + "px";
        height.innerHTML = parseInt(height.innerHTML) + 10000;
    });

    down.addEventListener('click', event => {
        rocket.style.bottom = parseInt(rocket.style.bottom) - 5 + "px";
        height.innerHTML = parseInt(height.innerHTML) - 10000;
    });

    }
window.addEventListener("load", init);