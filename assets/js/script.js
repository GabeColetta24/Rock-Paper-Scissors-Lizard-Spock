// Initialize the player and computer scores
let playerScore = 0;
let computerScore = 0;
// Available player choices
function playGame(playerChoice) {
    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    // Randomly select a computer choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Display the computer's choice
    document.getElementById('computer-choice-display').textContent = computerChoice;

    // Determine the result
    const result = determineWinner(playerChoice, computerChoice);

    // Update the result display
    document.getElementById('result').textContent = result;

    // Update scores
    if (result === 'Player Wins!') {
        playerScore++;
    } else if (result === 'Computer Wins!') {
        computerScore++;
    }

    // Update score tracker
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function determineWinner(player, computer) {
    // Tie condition
    if (player === computer) {
        return "It's a Tie!";
    }

    // Winning combinations
    const winningConditions = {
        Rock: ['Scissors', 'Lizard'],
        Paper: ['Rock', 'Spock'],
        Scissors: ['Paper', 'Lizard'],
        Lizard: ['Paper', 'Spock'],
        Spock: ['Rock', 'Scissors']
    };
    // Determine winner
    if (winningConditions[player].includes(computer)) {
        return 'Player Wins!';
    } else {
        return 'Computer Wins!';
    }
}