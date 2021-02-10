/* Constants */
const FIRST_PLAYER = "Player 1"

let rolledOnes = []
let rolledTwos = []
let rolledThrees = []
let rolledFours = []
let rolledFives = []
let rolledSixes = []
let largeStraight = [1, 2, 3, 4, 5]

/* Game Logic Variables and State */
const dice = [1, 2, 3, 4, 5, 6]

const winCombos = {
      rolledOne: 1,
      rolledFive: 5,
      threeOnes: [1, 1, 1],
      threeTwos: [2, 2, 2],
      threeThrees: [3, 3, 3],
      threeFours: [4, 4, 4],
      threeFives: [5, 5, 5],
      threeSixes: [6, 6, 6],
      largeStraight: [1, 2, 3, 4, 5]

}

// const scoreStates = {
//       rolledOne: false,
//       rolledFive: false,
//       threeOnes: false,
//       threeTwos: false,
//       threeThrees: false,
//       threeFours: false,
//       threeFives: false,
//       threeSixes: false,
//       largeStraight: false
// }

// let scoreValues = {
//       rolledOne: 100,
//       rolledFive: 50,
//       threeOnes: 1000,
//       threeTwos: 200,
//       threeThrees: 300,
//       threeFours: 400,
//       threeFives: 500,
//       threeSixes: 600,
//       largeStraight: 1500
// }

let clickedDice = []
let unclickedDice = [1, 2, 3, 4, 5] // holds all dice that have not been clicked, subject to a future roll
let validMoves = [] // holds dice that have value
let diceValues = [] // holds dice that have value after roll

let player1Score = 0
let player2Score = 0

let player1Wins = 0
let player2Wins = 0

/* DOM References */
const rollButtonEl = document.querySelector('#roll-button')
const scoreButtonEl = document.querySelector('#keep-score-button')
const diceEl = document.querySelector('.all-dice')
const messageBoxEl = document.querySelector('#message-box')

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
      // STRETCH: Dice are not clickable *DONE*
      validMoves.length = 0

      // STRETCH: Keep points button is not visible *DONE*
      scoreButtonEl.classList.add("hidden");
      
      // STRETCH: Message box says "Player 1, roll to start your turn" *DONE*
      messageBoxEl.textContent = 'Player 1, roll to start your turn!'
}

const makeMove = () => {
      // While loop to keep running function until player is done

      // Click the roll button to initiate a roll
      // Randomize each dice and return a value, represented with correct photo
      // updating state variables & DOM
      updateDice();

      // Can not roll again until dice have been selected

      // Check score combos to determine dice that are counters.
      isDiceCounter();

      // STRETCH: Make valuable dice clickable
      clickDice();

      // Display keep score button *DONE*
      scoreButtonEl.classList.remove("hidden");

      // STRETCH: Display "Player 1, Please select your dice."
      // or, "You Rolled garbage! You scored 0 points. Player 2, it's your turn."
      if(diceValues.length > 0) {
            messageBoxEl.textContent = 'Player 1, please select your dice.'
      } else {
            messageBoxEl.textContent = "Player 1, you rolled garbage! You scored 0 points. Player 2, it's your turn."
      }
}

const isDiceCounter = () => {
      // Check through score arrays to see if returned dice values are worth points.
      // let valuableDice = diceValues.filter(value => value === 2)

      
      // Filter out numbers from diceValues array that don't match win conditions (for each win condition)
      // Check to see that array is correct length (for each win condition)
      
      // STRETCH: Make valuable dice clickable

      // Put valuable dice in clickable array
      
      // Put non-valuable dice in unclickable array
      
      // BONUS: Gray out dice that are not valuable/not clickable.

}

const updateDice = () => {
      validMoves = []
      createDiceValues();

      diceValues.sort(function(a, b){return a-b});
      console.log(diceValues);
      
      let rolledOnes = diceValues.filter(number => number === 1)
      let rolledTwos = diceValues.filter(number => number === 2)
      let rolledThrees = diceValues.filter(number => number === 3)
      let rolledFours = diceValues.filter(number => number === 4)
      let rolledFives = diceValues.filter(number => number === 5)
      let rolledSixes = diceValues.filter(number => number === 6)

      if(rolledOnes.length >= 1) {validMoves.push(rolledOnes)}
      if(rolledTwos.length >= 3) {validMoves.push(rolledTwos)}
      if(rolledThrees.length >= 3) {validMoves.push(rolledThrees)}
      if(rolledFours.length >= 3) {validMoves.push(rolledFours)}
      if(rolledFives.length >= 1) {validMoves.push(rolledFives)}
      if(rolledSixes.length >= 3) {validMoves.push(rolledSixes)}
      // if(diceValues == largeStraight) {validMoves.push(largeStraight)} // ?????????????
      
      console.log(validMoves);

      // diceValues.forEach(valuableDice)
      // const valuableDice = () => {
      //       return diceValues.indexOf(1)
      // }


      
      // Figure out how to code large straight
      // console.log(largeStraight)

      // sort the array to check for straight
      
      

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

//  I want to select multiple dice that are part of one valid combo
      // for(const combo in winCombos) {
      //       if(clickedDice.includes(combo.value)) {
      //             let clickIndex = clickedDice.findIndex(combo)
      //             clickedDice.splice(clickIndex, 1)
      //             classList.add('gray')
      //       }
      // }

      // Check if selected dice are valid combo
      // if they are valid, remove the dice from array
      // make their border gray

// I want to click on roll button to roll remaining dice
      // re-roll dice that aren't in the unclickable array
      // I want to select multiple dice that are in a valid combo, but only in the clickable array, LOOP

//  I want to click on submit button after it's clicked





const clickDice = (event) => {
      // STRETCH: remove or add dice from the clickable dice array
      let selectedDice = event.target
      if(selectedDice == diceEl) {
            return
      }
      selectedDice.classList.add('red');
      // toggle red or not red .contain

      let index = selectedDice.id.substring(selectedDice.id.length -1, selectedDice.id.length)

      if(!selectedDice.classList.contains('red')) {
            clickedDice.push(parseInt(index))
      } /*else if(selectedDice.classList.contains('red')) {
            let clickIndex = clickedDice.findIndex(parseInt(index))
            clickedDice.splice(clickIndex, 1)
      }*/
      // STRETCH: Calculate current round score with each dice clicked/unclicked.
      // for(const combo in winCombos) {
      //       let Object.values(winCombos)
      //       if(clickedDice.includes(combo.value)) {
      //             let clickIndex = clickedDice.findIndex(combo.value)
      //             clickedDice.splice(clickIndex, 1)
      //             classList.add('gray')
      //       }
      // }
      console.log(clickedDice)
      console.log(Object.values(winCombos))
}


const keepScore = () => {
      // Value of roll is tabulated and added to player's total score.

      // STRETCH: If player score = 0, player must have 350 points to click keep score

      // STRETCH: Clicking keep score button adds score to current players total.

      // STRETCH: Display "Player 1, you scored X points, great job! Player 2, it's your turn."

      // Change Players

      // Reset current round score
      
      // Reset unclicked dice array
}

const isGameWon = () => {
      // Check to see if a player has a total score of 5000 points

      // Display "Player 1, you reached 5000 points! You win!"

      // STRETCH: Change roll button to Rematch! button

      // STRETCH: Make keep score button invisible.
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)
rollButtonEl.addEventListener("click", updateDice)
diceEl.addEventListener("click", clickDice)
scoreButtonEl.addEventListener("click", keepScore)








/*When I click roll, the dice are returned randomly. They are assigned ID’s the same as the dice value. Their dice values are put into an array - diceValues

diceValues - holds the dice values after the roll, no clicking, no calculations.


We need to go through those dice values and determine which ones are worth something. To do that, we need to check their values against win combinations.

validMoves - array that holds values from diceValues that are worth points


Then we need to access the valuable dice, and assign them clickability.

Then we need to be able to click them on and off.

When they are clicked, they need to be removed from the array and kept aside, so only the remaining dice can be rolled.

Their value needs to be added to running total in the message box when they are clicked, or subtracted when unchecked.

Then we need to run through this again with the remaining dice. */