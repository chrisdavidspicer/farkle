/* Constants */
const FIRST_PLAYER = "Player 1"

/* Game Logic Variables and State */
let diceValues = []

let player1Score = 0
let player2Score = 0

let onesTotal = 0;
let twosTotal = 0;
let threesTotal = 0;
let foursTotal = 0;
let fivesTotal = 0;
let sixesTotal = 0;

let currentPlayer = 'Player 1'

/* DOM References */
const rollButtonEl = document.querySelector('#roll-button')
const scoreButtonEl = document.querySelector('#keep-score-button')
const resetButtonEl = document.querySelector('#reset-button')
const diceEl = document.querySelector('.all-dice')
const messageBoxEl = document.querySelector('#message-box')
const score1 = document.querySelector('#player-1-score')
const score2 = document.querySelector('#player-2-score')

/* Functions and Game Logic */
const initialize = () => {
      currentPlayer = FIRST_PLAYER
      
      scoreButtonEl.classList.add("hidden");
      resetButtonEl.classList.add("hidden");
      rollButtonEl.classList.remove("hidden");
      
      createDiceValues();

      rollButtonEl.innerText = 'Roll the dice!'

      player1Score = 0
      player2Score = 0

      score1.innerText = player1Score
      score2.innerText = player2Score
      
      messageBoxEl.textContent = 'Player 1, roll to start your turn!'
}

const rollDice = () => {
      createDiceValues();
      scoreButtonEl.classList.remove("hidden");
      addScore();
      rollButtonEl.classList.add("hidden");
}

const createDiceValues = () => {
      diceValues.length = 0
      let allDice = diceEl.children;
      for(let i = 0; i < allDice.length; i++) {
            randValue = Math.floor(Math.random() * 6) + 1
            allDice[i].id = `dice-${randValue}`
            diceValues.push(randValue)
      }
}

const addScore = () => {
      let rolledOnes = diceValues.filter(number => number === 1)
      let rolledTwos = diceValues.filter(number => number === 2)
      let rolledThrees = diceValues.filter(number => number === 3)
      let rolledFours = diceValues.filter(number => number === 4)
      let rolledFives = diceValues.filter(number => number === 5)
      let rolledSixes = diceValues.filter(number => number === 6)

      if(rolledOnes.length >= 1) {
            onesTotal = (rolledOnes.length * 100);
      } if(rolledTwos.length >= 3) {
            twosTotal = 200;
      } if(rolledThrees.length >= 3) {
            threesTotal = 300;
      } if(rolledFours.length >= 3) {
            foursTotal = 400;
      } if(rolledFives.length >= 1) {
            fivesTotal = (rolledFives.length * 50);
      } if(rolledSixes.length >= 3) {
            sixesTotal = 600;
      }
      let roundScore = onesTotal + twosTotal + threesTotal + foursTotal + fivesTotal + sixesTotal
      if(currentPlayer == 'Player 1') {
            player1Score = roundScore + player1Score
            messageBoxEl.innerText = `Player 1, your current round score is ${player1Score}`
      } else {
            player2Score = roundScore + player2Score
            messageBoxEl.innerText = `Player 2, your current round score is ${player2Score}`
      }
}

const keepScore = () => {
      if(currentPlayer === 'Player 1') {
            score1.innerText = player1Score
      } else {
            score2.innerText = player2Score
      }
      clearRoundScore();
      checkForWin();
      rollButtonEl.classList.remove("hidden");
      scoreButtonEl.classList.add("hidden");
}

const checkForWin = () => {
      if(player1Score >= 5000) {
            messageBoxEl.textContent = 'Player 1, you reached 5000 points! You win!'
            scoreButtonEl.classList.add("hidden");
            resetButtonEl.classList.remove("hidden");
            rollButtonEl.classList.add("hidden");
      }
      if(player2Score >= 5000) {
            messageBoxEl.textContent = 'Player 2, you reached 5000 points! You win!'
            scoreButtonEl.classList.add("hidden");
            resetButtonEl.classList.remove("hidden");
            rollButtonEl.classList.add("hidden");
      } else {
            changePlayers();
      }
}

const clearRoundScore = () => {
      onesTotal = 0;
      twosTotal = 0;
      threesTotal = 0;
      foursTotal = 0;
      fivesTotal = 0;
      sixesTotal = 0;
}

const changePlayers = () => {
      if(currentPlayer == "Player 1") {
            currentPlayer = "Player 2"
            messageBoxEl.textContent = "Player 2, it's your turn!"
      } else if(currentPlayer == "Player 2") {
            currentPlayer = "Player 1"
            messageBoxEl.textContent = "Player 1, it's your turn!"
      }
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)
rollButtonEl.addEventListener("click", rollDice)
scoreButtonEl.addEventListener("click", keepScore)
resetButtonEl.addEventListener("click", initialize)

/*------Game End------*/
// Display winner text in message box. *DONE*
// Hide roll button *DONE*
// Show reset button *DONE*
// Have reset button launch initialize *DONE*
// Set player scores back to 0 *DONE*
// Decide if this needs a function or gamestate

/*-----Keep Score Button-----*/
// Player must push keep score button to log score *DONE*
// Button is not visible at beginning or end of game *DONE*
// Button becomes visible after first roll *DONE*
// Hide roll button until keep score is clicked *DONE*
// After button is clicked, display who's turn it is in message box
// Debug trouble with changing players and scoring
// STRETCH: Button becomes visible after at least one die is clicked

/*-----Player Score -----*/
// Player doesn't get on scoreboard until they have 350 points
// Update message box with current round score before keep score button is pushed

/*-----Clicking Dice-----*/
// Display, Player X, please select your dice if there's valuable dice
// Or display, Player X, you rolled garbage and scored 0 points. Player X it's your turn
// Make dice clickable
// Dice should have value before they are clicked
// Make dice clickable if they have value
// Dice are not clickable if they have no value
// Tabulate score of clicked dice
// Display score of clicked dice in message box
// Display how many dice player has clicked in message box
// Allow option to click roll or keep score after clicking dice
// If clicked keep score, add round score to player score