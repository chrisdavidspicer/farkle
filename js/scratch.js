/* Constants */
const FIRST_PLAYER = "Player 1"

/* Game Logic Variables and State */

let diceValues = [] // holds dice that have value after roll

let player1Score = 0
let player2Score = 0

let onesTotal = 0;
let twosTotal = 0;
let threesTotal = 0;
let foursTotal = 0;
let fivesTotal = 0;
let sixesTotal = 0;


/* DOM References */
const rollButtonEl = document.querySelector('#roll-button')
const diceEl = document.querySelector('.all-dice')
const messageBoxEl = document.querySelector('#message-box')
const score1 = document.querySelector('#player-1-score')
const score2 = document.querySelector('#player-2-score')

/* Functions and Game Logic */

const initialize = () => {
      // Initialize game with original game state.
      
      // Put 12345 dice images in place. *DONE*
      createDiceValues();

      // Roll button value says roll *DONE*
      rollButtonEl.innerText = 'Roll the dice!'
      // Scores are set at 0 *DONE*
      player1Score = 0
      player2Score = 0
      
      // STRETCH: Message box says "Player 1, roll to start your turn" *DONE*
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
      // Randomize each dice and return a value, represented with correct photo *DONE*
      for(let i = 0; i < allDice.length; i++) {
            randValue = Math.floor(Math.random() * 6) + 1
            allDice[i].id = `dice-${randValue}`
            diceValues.push(randValue)
            // push all values into an array holding dice side values (diceValues) *DONE*
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
      score1.innerText = roundScore
}

const checkForWin = () => {
      // Check to see if a player has a total score of 5000 points

      // Display "Player 1, you reached 5000 points! You win!"
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

}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)
rollButtonEl.addEventListener("click", rollDice)




// Add ability to switch player

// Figure out how to keep running score total