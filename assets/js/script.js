// Initialize the player and computer scores
let playerScore = 0;
let computerScore = 0;
// Available player choices
function playGame(playerChoice) {
    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
};
// Randomly select a computer choice
const computerChoice = choices[Math.floor(Math.random() * choices.length)];