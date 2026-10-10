let feedCooldown = false;

function feed() {
    if (feedCooldown) {
        return;
    }

    feedCooldown = true;

    const startTime = Date.now();
    const cooldown = FEED_COOLDOWN;

    const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / cooldown * 100, 100);

        document.getElementById("action-progress").style.width =
            progress + "%";

        if (progress >= 100) {
            clearInterval(timer);
            const feedAmount = FEED_BASE_AMOUNT + gameState.feedBonus + (gameState.feedUses * FEED_INCREASE);

            gameState.hunger = Math.min(gameState.hunger + feedAmount, MAX_STAT);

            addLog("Feed used: +" + feedAmount + " hunger");

            gameState.feedUses++;

            console.log(
    "Feed used | Hunger:",
    gameState.hunger,
    "| Feed bonus:",
    gameState.feedBonus,
    "| Feed amount:",
    feedAmount
);

            if (gameState.hunger >= 99) {
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
    const cooldown = CRY_COOLDOWN;

    const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / cooldown * 100, 100);

        document.getElementById("action-progress").style.width =
            progress + "%";

        if (progress >= 100) {
            clearInterval(timer);

            gameState.feedBonus += cryBonus;
            addLog("Cry for food: +" + cryBonus + " Feed bonus");
            document.getElementById("cry-button").title =
    "Increases Hunger gained from Feed by +" + cryBonus;

            feedCooldown = false;

            document.getElementById("action-progress").style.width = "0%";
        }
    }, 20);
}

function explore() {
    if (feedCooldown) {
        return;
    }

    feedCooldown = true;

    const startTime = Date.now();
    const cooldown = EXPLORE_COOLDOWN;

    const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / cooldown * 100, 100);

        document.getElementById("action-progress").style.width =
            progress + "%";

        if (progress >= 100) {
            clearInterval(timer);

            gameState.exploreDistance += 1;

            if (gameState.exploreDistance >= gameState.exploreRequiredDistance) {
                gameState.exploreLevel++;
                gameState.exploreDistance = 0;
                gameState.exploreRequiredDistance *= EXPLORE_LEVEL_MULTIPLIER;

                addLog("Explore leveled up! Level " + gameState.exploreLevel);
            }

            updateExplore();

            feedCooldown = false;

            document.getElementById("action-progress").style.width = "0%";
        }
    }, 20);
}

function updateExplore() {
    const progress =
        (gameState.exploreDistance / gameState.exploreRequiredDistance) * 100;

    document.getElementById("explore-progress").style.width =
        progress + "%";

    document.getElementById("explore-distance").textContent =
        gameState.exploreDistance + " / " +
        gameState.exploreRequiredDistance + " m";
}

