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
const diceEl = document.querySelector('.all-dice')
const messageBoxEl = document.querySelector('#message-box')
const score1 = document.querySelector('#player-1-score')
const score2 = document.querySelector('#player-2-score')

/* Functions and Game Logic */
const initialize = () => {
      currentPlayer = FIRST_PLAYER
      
      createDiceValues();

      rollButtonEl.innerText = 'Roll the dice!'

      player1Score = 0
      player2Score = 0
      
      messageBoxEl.textContent = 'Player 1, roll to start your turn!'
}

const rollDice = () => {
      createDiceValues();
      addScore();
      checkForWin();
      clearRoundScore();
      changePlayers();
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
            score1.innerText = player1Score
      } else {
            player2Score = roundScore + player2Score
            score2.innerText = player2Score
      }
}

const checkForWin = () => {
      if(player1Score >= 5000) {
            messageBoxEl.textContent = 'Player 1, you reached 5000 points! You win!'
      }
      if(player2Score >= 5000) {
            messageBoxEl.textContent = 'Player 2, you reached 5000 points! You win!'
      } else {
            return
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
      } else if(currentPlayer == "Player 2") {
            currentPlayer = "Player 1"
      }
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)
rollButtonEl.addEventListener("click", rollDice)