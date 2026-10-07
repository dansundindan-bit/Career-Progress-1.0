let pickCooldown = false;



function pickCan() {
    if (pickCooldown) {
        return;
    }

    if (cans >= maxCans) {
        return;
    }

    pickCooldown = true;

    const startTime = Date.now();
    const cooldown = 1500;

    const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / cooldown * 100, 100);

        document.getElementById("action-progress").style.width =
            progress + "%";

        if (progress >= 100) {
            clearInterval(timer);

            // Can plockas när timern är klar
            cans++;

            pickCooldown = false;

            document.getElementById("action-progress").style.width = "0%";

            updateUI();
        }
    }, 20);
}

function sellCans() {
    const bagsLost = Math.floor(cans / 2);

    money += cans;
    cans = 0;

    bags = Math.max(0, bags - bagsLost);

    updateMaxCans();
    updateUI();
}