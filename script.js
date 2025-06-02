let computerChoice;
let human
function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {computerChoice = 'rock';
        return computerChoice;
    }
    else if (randomNum === 2) {computerChoice ='paper';
        return computerChoice;
    }
    else if (randomNum === 3) {computerChoice = 'scissor'
        return computerChoice;
    }
    else alert('An error occurred!');
}