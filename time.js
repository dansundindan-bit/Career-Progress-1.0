
function startGameClock() {
    setInterval(() => {
        gameState.gameDaySeconds++;

        if (gameState.hunger <= 0 && !gameState.dead) {
            die();
        }

        gameState.dayProgress =
            (gameState.gameDaySeconds / GAME_DAY_LENGTH) * 100;

        if (gameState.gameDaySeconds >= GAME_DAY_LENGTH) {
            gameState.gameDaySeconds = 0;
            gameState.dayProgress = 0;
            gameState.lifetime++;

            updateUI();
        }

        updateDayProgress();
        updateHunger();
    }, 1000);
}
