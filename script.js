let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget=()=>Math.round(Math.random()*9)





const compareGuesses=(user, computer, target)=>{
    if  (Math.abs(user - target) <=  Math.abs(computer - target)) {
        return true
    } else {
        return false////логика на true сли человек выиграл
    }
}


function updateScore(winner) {
    if (winner == 'human') {
        return humanScore++
    }
    if (winner == "computer") {
        return computerScore++
    } else {

    }
}


function advanceRound() {
    return currentRoundNumber ++
}
