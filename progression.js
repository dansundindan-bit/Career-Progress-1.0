

/* ===================================
All progression ska balanseras kring att panta burkar hela livet.
Det ska precis möjliggöra att överleva livsspannet på 70(?) år och ska gå utan att skippa tid.
======================================*/


function unlockProgression(name, message) {
    if (gameState.unlocked[name]) {
        if (name === "feed") {
            document.getElementById("feed-button").style.display = "block";
        }
        return;
    }

    gameState.unlocked[name] = true;

    if (name === "feed") {
        unlockAchievement("feed");
        document.getElementById("feed-button").style.display = "block";
    }

    document.getElementById("progression-message").textContent = message;
}

function restoreProgression() {
    if (gameState.unlocked.feed) {
        document.getElementById("feed-button").style.display = "block";
    }
}

setTimeout(() => {
    unlockProgression("feed", "I feel the power to survive!");
}, 3000);