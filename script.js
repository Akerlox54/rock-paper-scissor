let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let result;
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {result = 'rock'; }
    else if (randomNum === 2) {result ='paper'; }
    else if (randomNum === 3) {result = 'scissor'; }
    else alert('An error occurred!');
    return result;
}

function getHumanChoice() {
    let result = prompt('What do you choose?', 'Rock? Paper? Scissor?').toLowerCase();
    if (result === 'rock'
        || result === 'paper'
        || result === 'scissor') {
            return result; }
    else alert('Invalid choice.');
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
    if (humanChoice === computerChoice
        && humanChoice !== null && humanChoice !== undefined
        && computerChoice !== null && humanChoice !== undefined
    ) {alert('Draw!'); }
    else if (humanChoice === 'rock' && computerChoice === 'scissor'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissor' && computerChoice === 'paper'
    ) {
        alert('Human wins!');
    humanScore =+ 1; }
    else if (computerChoice === 'rock' && humanChoice === 'scissor'
        || computerChoice === 'paper' && humanChoice === 'rock'
        || computerChoice === 'scissor' && humanChoice === 'paper'
    ) {
        alert('Computer wins!');
    computerScore =+ 1; }
    else alert('An error occurred!')
}