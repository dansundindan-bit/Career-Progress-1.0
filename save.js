function exportSave() {
    const save = {
        cans: cans,
        money: money
    };

    const saveCode = btoa(JSON.stringify(save));

    prompt("Copy your save code:", saveCode);
}

function importSave() {
    const saveCode = prompt("Paste your save code:");

    if (!saveCode) {
        return;
    }

    try {
        const save = JSON.parse(atob(saveCode));

        cans = save.cans;
        money = save.money;

        updateUI();
        
    } catch {
        alert("Invalid save code!");
    }
}

updateUI();
updateShopUI();