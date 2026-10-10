function updateUI() {
    updateHunger();
}

function updateDayProgress() {
    document.getElementById("day-progress").style.width =
        gameState.dayProgress + "%";

    document.getElementById("day-percent").textContent =
        Math.floor(gameState.dayProgress) + "%";

    const remainingSeconds =
        GAME_DAY_LENGTH - gameState.gameDaySeconds;

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    document.getElementById("day-time").textContent =
        minutes + ":" + String(seconds).padStart(2, "0");
}

function updateHunger() {
    document.getElementById("hunger-progress").style.width =
        gameState.hunger + "%";

    document.getElementById("hunger-percent").textContent =
        Math.floor(gameState.hunger) + "%";

    const remainingSeconds =
        gameState.hunger / getHungerDrainPerSecond();

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = Math.floor(remainingSeconds % 60);

    document.getElementById("hunger-time").textContent =
        minutes + ":" + String(seconds).padStart(2, "0");
}

