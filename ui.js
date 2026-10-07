function updateUI() {
    document.getElementById("money").textContent = "Money: " + money;
    document.getElementById("counter").textContent = "Cans: " + cans;
    document.getElementById("bags").textContent = "Bags: " + bags;
    
    updateHunger();

}


function updateShopUI() {
    document.getElementById("beer-price").textContent =
        beerPrice;

    document.getElementById("plastic-bag-price").textContent =
        plasticBagPrice;
}

function updateDayProgress() {
    document.getElementById("day-progress").style.width =
        dayProgress + "%";

    document.getElementById("day-percent").textContent =
        Math.floor(dayProgress) + "%";

    const remainingSeconds =
        GAME_DAY_LENGTH - gameDaySeconds;

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    document.getElementById("day-time").textContent =
        minutes + ":" + String(seconds).padStart(2, "0");
}

function updateHunger() {
    document.getElementById("hunger-progress").style.width =
        hunger + "%";

    document.getElementById("hunger-percent").textContent =
    Math.floor(hunger) + "%";

    const remainingSeconds =
        hunger * (GAME_DAY_LENGTH / 100);

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = Math.floor(remainingSeconds % 60);

    document.getElementById("hunger-time").textContent =
        minutes + ":" + String(seconds).padStart(2, "0");
}

