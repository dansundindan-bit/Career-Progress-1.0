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

}, (GAME_DAY_LENGTH / (100 / PROGRESS_INCREMENT)) * 1000);