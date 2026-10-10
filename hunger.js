let hungerSpeed = 1;

function getHungerDrainPerSecond() {
    return (BASE_HUNGER_PER_DAY / GAME_DAY_LENGTH) * hungerSpeed;
}

setInterval(() => {
    if (gameState.dead) {
        return;
    }

    const previousHunger = gameState.hunger;

    gameState.hunger = Math.max(
    0,
    gameState.hunger - getHungerDrainPerSecond()
);

devLog("HUNGER", "Hunger decreased", {
    from: previousHunger,
    to: gameState.hunger
});

    if (gameState.hunger <= 0) {
        die();
    }

    updateHunger();
}, 1000);