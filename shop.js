const beerPrice = 15;
const plasticBagPrice = 2;

function buyPlasticBag() {
    if (money >= plasticBagPrice) {
        money -= plasticBagPrice;
        bags++;

        updateMaxCans();
        updateUI();
    }
}

function buyBeer() {
    if (money >= beerPrice) {
        money -= beerPrice;
        cans += 6;

        document.getElementById("money").textContent = "Money: " + money;
        document.getElementById("counter").textContent = "Cans: " + cans;
    }
}