function updateUI() {
    document.getElementById("money").textContent = "Money: " + money;
    document.getElementById("counter").textContent = "Cans: " + cans;
    document.getElementById("bags").textContent = "Bags: " + bags;

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
}