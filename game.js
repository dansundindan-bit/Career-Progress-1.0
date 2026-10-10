// Game over och sånt plus
function die() {
    gameState.dead = true;

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

