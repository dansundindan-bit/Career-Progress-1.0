console.log("TIME.JS FUNGERAR");

const GAME_DAY_LENGTH = 864;
const HUNGER_LOSS_PER_SECOND = 100 / GAME_DAY_LENGTH;

let dayProgress = 0;
let gameDaySeconds = 0;

setInterval(() => {
    gameDaySeconds++;

    hunger = Math.max(0, hunger - HUNGER_LOSS_PER_SECOND);

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













/* BACKUP AV TIME.JS

console.log("TIME.JS FUNGERAR");

const GAME_DAY_LENGTH = 864;
const PROGRESS_INCREMENT = 2;

let dayProgress = 0;

setInterval(() => {
    dayProgress += PROGRESS_INCREMENT;

    console.log("Progress:", dayProgress);

    if (dayProgress >= 100) {
        dayProgress = 0;
        lifetime++;

        updateUI();
    }

    updateDayProgress();
    updateHunger();

}, (GAME_DAY_LENGTH / (100 / PROGRESS_INCREMENT)) * 1000);

*/