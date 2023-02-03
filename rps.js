const options = ["rock", "paper", "scissors"];
const playerButton = document.querySelectorAll('div.playerButton button')
let computerScore = 0;
let playerScore = 0;

//playerButton.forEach(button => {button.addEventListener('click', getPlayerChoice)});

function getComputerSelection() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound (playerChoice) {

    let playerSelection = playerChoice.toLowerCase();
    let computerSelection = getComputerSelection();
    let result = "";
    let scores = "";

    if (['rock', 'paper', 'scissors'].includes(playerSelection)) {
        console.log('CPU', computerSelection)
        console.log('PC', playerSelection)
    }
        if (playerSelection==computerSelection) {
            result =  ('<br>You both chose: ' + playerSelection.toUpperCase() + ". No one scores any points!");
            scores =  ("<br><br>Player Score: " + playerScore + "<br>CPU Score: " + computerScore);
        } 
        else if ((playerSelection=='rock' && computerSelection=='scissors') ||
                 (playerSelection=='scissors' && computerSelection=='paper') ||
                 (playerSelection=='paper' && computerSelection=='rock')) {
                
                 ++playerScore;
                 result =  ('<br>You win! ' + playerSelection.toUpperCase() + ' beats ' + computerSelection.toUpperCase()); 
                 scores = ("<br><br>Player Score: " + playerScore + "<br>CPU Score: " + computerScore);
            
                if (playerScore == 5) {
                    result += ("<br>You won the game! Reload the page to play again!");
            }
        } 
        else {
            ++computerScore;
            result =  ('<br>You lose! ' + playerSelection.toUpperCase() + ' loses to ' + computerSelection.toUpperCase())
            scores = ("<br><br>Player Score: " + playerScore + "<br>CPU Score: " + computerScore);

            if (computerScore == 5) {
                result += ("<br>You lost the game! Reload the page to play again!");
            }
        }

    document.getElementById('result').innerHTML = result;
    document.getElementById('scores').innerHTML = scores;
    return

};

function getPlayerChoice(e) {
    // let playerSelection = (e.target.id);
    // console.log(playerSelection);
    let playerChoice = e.target.textContent;
    console.log(playerChoice);
    playRound(playerChoice);

}

playerButton.forEach(button => {button.addEventListener('click', getPlayerChoice)});
