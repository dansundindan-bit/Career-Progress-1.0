console.log("TIME.JS FUNGERAR");

const GAME_DAY_LENGTH = 864;

let dayProgress = 0;
let gameDaySeconds = 0;

setInterval(() => {
    gameDaySeconds++;

    if (hunger <= 0 && !dead) {
    die();
}

    dayProgress = (gameDaySeconds / GAME_DAY_LENGTH) * 100;
    

    console.log("Seconds:", gameDaySeconds, "Progress:", dayProgress);

    if (gameDaySeconds >= GAME_DAY_LENGTH) {
    gameDaySeconds = 0;
    dayProgress = 0;
    lifetime++;

        updateUI();
    }

    updateDayProgress();
    updateHunger();

}, 1000);