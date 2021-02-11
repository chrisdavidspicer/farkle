/* Constants */
const FIRST_PLAYER = "Player 1"

/* Game Logic Variables and State */
let diceValues = [];

let currentPlayer = 'Player 1';

let player1Score = 0;
let player2Score = 0;

let roundScore = 0;

let onesTotal = 0;
let twosTotal = 0;
let threesTotal = 0;
let foursTotal = 0;
let fivesTotal = 0;
let sixesTotal = 0;

let threeOnes = 0;
let fourOnes = 0;
let fiveOnes = 0;

let threeFives = 0;
let fourFives = 0;
let fiveFives = 0;

let isGameWon = false;

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

      isGameWon = false
      
      scoreButtonEl.classList.add("hidden");
      resetButtonEl.classList.add("hidden");
      rollButtonEl.classList.remove("hidden");
      
      createDiceValues();

      rollButtonEl.innerText = 'Roll the dice!'

      player1Score = 0
      player2Score = 0

      roundScore = 0

      score1.innerText = player1Score
      score2.innerText = player2Score
      
      messageBoxEl.textContent = `${FIRST_PLAYER}, roll to start your turn!`
}

const rollDice = () => {
      messageBoxEl.textContent = ""
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

      if(rolledOnes.length < 3) {
            onesTotal = (rolledOnes.length * 100);
      } if(rolledOnes.length === 3) {
            threeOnes = 1000;
      } if(rolledOnes.length === 4) {
            fourOnes = 1100;
      } if(rolledOnes.length === 5) {
            fiveOnes = 1200;
      } if(rolledTwos.length >= 3) {
            twosTotal = 200;
      } if(rolledThrees.length >= 3) {
            threesTotal = 300;
      } if(rolledFours.length >= 3) {
            foursTotal = 400;
      } if(rolledFives.length < 3) {
            fivesTotal = (rolledFives.length * 50);
      } if(rolledFives.length === 3) {
            threeFives = 500;
      } if(rolledFives.length === 4) {
            fourFives = 550;
      } if(rolledFives.length === 5) {
            fiveFives = 600;
      }if(rolledSixes.length >= 3) {
            sixesTotal = 600;
      }
      roundScore = onesTotal + twosTotal + threesTotal + foursTotal + fivesTotal + sixesTotal +threeOnes + fourOnes + fiveOnes + threeFives + fourFives + fiveFives
      
      messageBoxEl.innerText = `${currentPlayer}, your current round score is ${roundScore}.`
}

const keepScore = () => {
      if(currentPlayer === 'Player 1') {
            if(roundScore >= 350 || player1Score >= 350) {
                  player1Score += roundScore
                  score1.innerText = player1Score
            }
      } else {
            if(roundScore >= 350 || player2Score >= 350) {
            player2Score += roundScore
            score2.innerText = player2Score
            }
      }
      clearRoundScore();
      checkForWin();
}

const checkForWin = () => {
      if(player1Score >= 5000) {
            isGameWon = true
            endGame();
      }
      if(player2Score >= 5000) {
            isGameWon = true
            endGame();
      } else {
            changePlayers();
            rollButtonEl.classList.remove("hidden");
            scoreButtonEl.classList.add("hidden");
      }
}

const clearRoundScore = () => {
      onesTotal = 0;
      twosTotal = 0;
      threesTotal = 0;
      foursTotal = 0;
      fivesTotal = 0;
      sixesTotal = 0;
      threeOnes = 0;
      fourOnes = 0;
      fiveOnes = 0;
      threeFives = 0;
      fourFives = 0;
      fiveFives = 0;
}

const changePlayers = () => {
      if(currentPlayer === "Player 1") {
            currentPlayer = "Player 2"
            if(roundScore < 350 && player1Score < 350) {
                  messageBoxEl.textContent = `You need 350 points to get on the board! ${currentPlayer}, it's your turn!`
            } else {
            messageBoxEl.textContent = `${currentPlayer}, it's your turn!`
            }
      } else if(currentPlayer === "Player 2") {
            currentPlayer = "Player 1"
            if(roundScore < 350 && player2Score < 350) {
                  messageBoxEl.textContent = `You need 350 points to get on the board! ${currentPlayer}, it's your turn!`
            } else {
            messageBoxEl.textContent = `${currentPlayer}, it's your turn!`
            }
      }
}

const endGame = () => {
            messageBoxEl.textContent = `${currentPlayer}, you reached 5000 points! You win!`
            rollButtonEl.classList.add("hidden");
            scoreButtonEl.classList.add("hidden");
            resetButtonEl.classList.remove("hidden");
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
// Put rollDice in if conditional, if isGameWon = True, endGame(), else... *DONE*
// Build endGame function - change button states *DONE*
// Build endGame function - declare winner *DONE*
// Solve player 1 winning issue. !!!!!
// Decide if this needs a function or gamestate *DONE*

/*-----Keep Score Button-----*/
// Player must push keep score button to log score *DONE*
// Button is not visible at beginning or end of game *DONE*
// Button becomes visible after first roll *DONE*
// Hide roll button until keep score is clicked *DONE*
// After button is clicked, display who's turn it is in message box *DONE*
// Debug trouble with changing players and scoring *DONE*
// STRETCH: Button becomes visible after at least one die is clicked !!!!!

/*-----Player Score -----*/
// Player doesn't get on scoreboard until they have 350 points *DONE*
// Code in three of a kind for 1's and 5's *DONE*
// Code in large straight !!!!!
// Update message box with current round score before keep score button is pushed *DONE*

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









// if 1 = 1 or 2, we're good
// if 1 equals 3, we're good
// if 1 equals 4 or five, we want that to be 100 each