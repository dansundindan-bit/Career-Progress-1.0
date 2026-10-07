let feedBonus = 0;
let feedIncrease = 0.01;
let feedUses = 0;
let cryBonus = 0.5;



let feedCooldown = false;

function feed() {
    if (feedCooldown) {
        return;
    }

    feedCooldown = true;

    const startTime = Date.now();
    const cooldown = 2500;

    const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / cooldown * 100, 100);

        document.getElementById("action-progress").style.width =
            progress + "%";

        if (progress >= 100) {
            clearInterval(timer);
            const feedAmount = 0.25 + feedBonus + (feedUses * feedIncrease);

            hunger = Math.min(hunger + feedAmount, MAX_STAT);

            addLog("Feed used: +" + feedAmount + " hunger");

            feedUses++;

            console.log(
    "Feed used | Hunger:",
    hunger,
    "| Feed bonus:",
    feedBonus,
    "| Feed amount:",
    feedAmount
);

            if (hunger >= 99) {
            unlockAchievement("well-fed");
            }

            updateHunger();
            feedCooldown = false;

            document.getElementById("action-progress").style.width = "0%";

            updateUI();
        }
    }, 20);
}

function cryForFood() {
    if (feedCooldown) {
        return;
    }

    feedCooldown = true;

    const startTime = Date.now();
    const cooldown = 500;

    const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / cooldown * 100, 100);

        document.getElementById("action-progress").style.width =
            progress + "%";

        if (progress >= 100) {
            clearInterval(timer);

            feedBonus += cryBonus;
            addLog("Cry for food: +" + cryBonus + " Feed bonus");
            document.getElementById("cry-button").title =
    "Increases Hunger gained from Feed by +" + cryBonus;

            feedCooldown = false;

            document.getElementById("action-progress").style.width = "0%";
        }
    }, 20);
}

let exploreLevel = 1;
let exploreDistance = 0;
let exploreRequiredDistance = 100;

function explore() {
    if (feedCooldown) {
        return;
    }

    feedCooldown = true;

    const startTime = Date.now();
    const cooldown = 1000;

    const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / cooldown * 100, 100);

        document.getElementById("action-progress").style.width =
            progress + "%";

        if (progress >= 100) {
            clearInterval(timer);

            exploreDistance += 1;

            if (exploreDistance >= exploreRequiredDistance) {
                exploreLevel++;
                exploreDistance = 0;
                exploreRequiredDistance *= 8;

                addLog("Explore leveled up! Level " + exploreLevel);
            }

            updateExplore();

            feedCooldown = false;

            document.getElementById("action-progress").style.width = "0%";
        }
    }, 20);
}

function updateExplore() {
    const progress =
        (exploreDistance / exploreRequiredDistance) * 100;

    document.getElementById("explore-progress").style.width =
        progress + "%";

    document.getElementById("explore-distance").textContent =
        exploreDistance + " / " + exploreRequiredDistance + " m";
}

