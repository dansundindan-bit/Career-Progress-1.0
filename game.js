//Resources
let money = 0;
let lifetime = 0;

// Stats
let hunger = 15.5;
let hungerLastUpdate = 0;
let dead = false;

// Constants
const MAX_STAT = 99;

// Game over och sånt plus
function die() {
    dead = true;

    console.log("PLAYER DIED");
    document.getElementById("death-screen").style.display = "flex";
    
}

function addLog(message) {
    const log = document.getElementById("event-log");

    const entry = document.createElement("div");
    entry.textContent = message;

    log.prepend(entry);
}

document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "f") {
        feed();
    }
});

