
function createSaveData() {
    return {
        version: CURRENT_SAVE_VERSION,
        state: JSON.parse(JSON.stringify(gameState))
    };
}

function saveGame() {
    try {
        localStorage.setItem(
            "careerProgressSave",
            JSON.stringify(createSaveData())
        );
    } catch (error) {
        console.error("Could not save game:", error);
    }
}

function loadGame() {
    const savedData = localStorage.getItem("careerProgressSave");

    if (!savedData) {
        return;
    }

    try {
        const save = JSON.parse(savedData);

        if (!save.state || typeof save.state !== "object") {
            throw new Error("Invalid save data");
        }

        Object.assign(gameState, save.state);

        console.log("Game loaded successfully.");
    } catch (error) {
        console.error("Could not load save:", error);
    }
}

function exportSave() {
    const saveCode = btoa(
        unescape(encodeURIComponent(JSON.stringify(createSaveData())))
    );

    prompt("Copy your save code:", saveCode);
}

function importSave() {
    const saveCode = prompt("Paste your save code:");

    if (!saveCode) {
        return;
    }

    try {
        const save = JSON.parse(
            decodeURIComponent(escape(atob(saveCode)))
        );

        if (!save.state || typeof save.state !== "object") {
            throw new Error("Invalid save data");
        }

        Object.assign(gameState, save.state);

        saveGame();
        location.reload();
    } catch (error) {
        alert("Invalid save code!");
        console.error("Could not import save:", error);
    }
}



loadGame();

updateUI();
updateDayProgress();
updateHunger();
restoreAchievements();
restoreProgression();

const deathScreen = document.getElementById("death-screen");

if (gameState.dead) {
    document.getElementById("death-screen").style.display = "flex";
} else {
    document.getElementById("death-screen").style.display = "none";
}

if (deathScreen && gameState.dead) {
    deathScreen.style.display = "flex";
} else if (deathScreen) {
    deathScreen.style.display = "none";
}

startGameClock();

setInterval(() => {
    saveGame();
}, 5000);

window.addEventListener("beforeunload", saveGame);