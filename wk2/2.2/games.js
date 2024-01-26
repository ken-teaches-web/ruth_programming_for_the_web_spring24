const game1 = {
    title: "pokemon",
    numberOfPlayers: 1,
    shortDescription: "You catch Pokemon with pokeballs and you become besties and conquer the world.",
    type: "adventure game"
};
const game2 = {
        title: "farthest frontier",
        numberOfPlayers: 1,
        shortDescription: "You are in charge of a group of settlers who leave the city. You must now lead them to survive in the wildernest and also build and grow. Watch out of raiders as well.",
        type: "management game"
}
const game3 = {
    title: "animal crossing",
    numberOfPlayers: 1,
    shortDescription: "You are left in charge of a island as one of the first villagers! You become in charge of the island's developement. Build new buildings and make new friends.",
    type: "casual game"
}
let games = [game1, game2, game3]
const gameNumber = parseInt(window.prompt("I have 3 games in  my collection. Pick a number between 1 and 3 and I will tell you about that game."))
console.log("You selected " + games[gameNumber -1].title +" which is a " + games[gameNumber -1].type + games[gameNumber -1].shortDescription);
