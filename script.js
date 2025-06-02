let computerChoice;
let humanChoice;

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {computerChoice = 'rock';}
    else if (randomNum === 2) {computerChoice ='paper';}
    else if (randomNum === 3) {computerChoice = 'scissor';}
    else alert('An error occurred!');
    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt('What do you choose?', 'Rock? Paper? Scissor?').toLowerCase();
    if (humanChoice === 'rock'
        || humanChoice === 'paper'
        || humanChoice === 'scissor') {
            return humanChoice;
        }
    else alert('Invalid choice.');
}