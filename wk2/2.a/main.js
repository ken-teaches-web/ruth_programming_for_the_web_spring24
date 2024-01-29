const quizQuestion1 = {
    question:"What type is Bulbasaur?", answer:"Grass and Poison"
};
const quizQuestion2 = {
    question:"What type is Vullaby?", answer:"Dark and Flying"
};
const quizQuestion3 = {
    question:"What type is Dedenne?", answer:"Electric and Fairy"
};
const quizQuestion4 = {
    question:"What type is Exeggcute?", answer:"Grass and Psychic"
};
const quizQuestion5 = {
    question:"What type is Kaldeo?", answer:"Water and Fighting"
};
const quizQuestion6 = {
    question:"What type is Gholdengo?", answer:"Steel and Ghost"
};
const quizQuestion7 = {
    question:"What type is Bidoof?", answer:"Normal"
};
const quizQuestion8 = {
    question:"What type is Arcanine?", answer:"Fire"
};
const quizQuestion9 = {
    question:"What type is Lugia?", answer:"Psychic and Flying"
};
const quizQuestion10 = {
    question:"What type is Delcatty?", answer:"Normal"
};

const quizGame = [quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5, quizQuestion6, quizQuestion7, quizQuestion8, quizQuestion9, quizQuestion10];
console.log(quizGame);

const randomIdx = Math.round(Math.random() * quizGame.length -1);

const userAnswer = window.prompt("What Type is that Pokemon? \n" + quizGame[randomIdx].question);
window.alert["You answered: \n" + userAnswer + "\n The correct answer is: \n" + quizGame[randomIdx].answer];
