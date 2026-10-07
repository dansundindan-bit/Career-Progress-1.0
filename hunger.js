const BASE_HUNGER_PER_DAY = 100;

let hungerSpeed = 1;

function getHungerDrainPerSecond() {
    return (BASE_HUNGER_PER_DAY / GAME_DAY_LENGTH) * hungerSpeed;
}

setInterval(() => {
    if (dead) {
        return;
    }

    hunger = Math.max(0, hunger - getHungerDrainPerSecond());

    if (hunger <= 0) {
        die();
    }

    updateHunger();
}, 1000);