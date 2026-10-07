//Resources
let cans = 0;
let money = 0;
let lifetime = 0;

// Capacity
let maxCans = 3;
let bags = 0;

// Stats
let hunger = 50;
let hungerLastUpdate = 0;
let dead = false;

// Constants
const MAX_STAT = 99;



function updateMaxCans() {
    maxCans = 3 + Math.min(bags, 5) * 2;
}


// Game over och sånt plus
function die() {
    dead = true;
    
    console.log("PLAYER DIED");
}




