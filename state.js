const gameState = {
    // Resources
    money: 0,

    //Time
    lifetime: 0,
    dayProgress: 0,
    gameDaySeconds: 0,

    // Hunger
    hunger: 5,
    dead: false,

    // Feed
    feedUses: 0,
    feedBonus: 0,

    // Explore
    exploreLevel: 1,
    exploreDistance: 0,
    exploreRequiredDistance: EXPLORE_BASE_DISTANCE,

    achievements: {
        feed: false,
        "well-fed": false
    },

    unlocked: {
        feed: false,
        cans: false
    }
};

