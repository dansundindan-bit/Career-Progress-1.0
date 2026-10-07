

/* ===================================
All progression ska balanseras kring att panta burkar hela livet.
Det ska precis möjliggöra att överleva livsspannet på 70(?) år och ska gå utan att skippa tid.
======================================*/

let unlocked = {
    feed: false,
    cans: false
};

function unlockProgression(name, message) {
    if (unlocked[name]) {
        return;
    }

    unlocked[name] = true;

    if (name === "feed") {
    unlockAchievement("feed");
    }

    document.getElementById("progression-message").textContent = message; 

    if (name === "feed") {
    document.getElementById("feed-button").style.display = "block";
}
    
}

setTimeout(() => {
    unlockProgression("feed", "I feel the power to survive!");
}, 3000);