let achievements = {
    feed: false,
    "well-fed": false
};

function unlockAchievement(name) {
    if (achievements[name]) {
        return;
    }

    achievements[name] = true;

    document.getElementById("achievement-" + name).style.display = "block";

    if (name === "well-fed") {
        document.getElementById("cry-button").style.display = "block";
    }
}

/* Dont datamine me pls*/