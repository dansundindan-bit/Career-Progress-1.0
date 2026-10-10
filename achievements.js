function unlockAchievement(name) {
    if (gameState.achievements[name]) {
        document.getElementById("achievement-" + name).style.display = "block";
        return;
    }

    gameState.achievements[name] = true;

    document.getElementById("achievement-" + name).style.display = "block";

    if (name === "well-fed") {
        document.getElementById("cry-button").style.display = "block";
    }
}

function restoreAchievements() {
    for (const name in gameState.achievements) {
        if (gameState.achievements[name]) {
            const element = document.getElementById("achievement-" + name);

            if (element) {
                element.style.display = "block";
            }
        }
    }

    if (gameState.achievements["well-fed"]) {
        document.getElementById("cry-button").style.display = "block";
    }
}
