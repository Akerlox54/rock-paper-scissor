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
    console.log(`Human chose: ${humanChoice}` + ' | ' + `computer chose: ${computerChoice}` );
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
    else alert('An error occurred!');
}

function playGame() {
    for (let i = 1; i < 6; i++) {   
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === computerScore) {alert('Overall: Draw!');}
    else if (humanScore > computerScore) {alert('Overall: You\'ve won!');}
    else if (computerScore > humanScore) {alert('Overall: You\'ve lost!');}
    else alert('An error occurred!');
}