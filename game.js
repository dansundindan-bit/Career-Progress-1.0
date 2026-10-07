let cans = 0;
let money = 0;
let lifetime = 0;
let maxCans = 3;
let bags = 0;

function updateMaxCans() {
    maxCans = 3 + Math.min(bags, 5) * 2;
}