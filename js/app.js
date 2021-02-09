/* Constants */
const FIRST_PLAYER = "Player 1"

let rolledOnes = []
let rolledTwos = []
let rolledThrees = []
let rolledFours = []
let rolledFives = []
let rolledSixes = []
let largeStraight = []

/* Game Logic Variables and State */
const dice = [1, 2, 3, 4, 5, 6]

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

let unclickedDice = [1, 2, 3, 4, 5]
let clickableDice = []
let unclickableDice = []
let diceValues = []

let player1Score = 0
let player2Score = 0
let player1Wins = 0
let player2Wins = 0

/* DOM References */
const rollButtonEl = document.querySelector('#roll-button')
const scoreButtonEl = document.querySelector('#keep-score-button')
const diceEl = document.querySelector('.all-dice')

/* Functions and Game Logic */

const initialize = () => {
      // Initialize game with original game state.
      // Roll button value says roll
      rollButtonEl.innerText = 'Roll the dice!'
      // Scores are set at 0
      player1Score = 0
      player2Score = 0
      // STRETCH: Dice are not clickable
      
      // STRETCH: Keep points button is not visible
      
      // STRETCH: Message box says "Player 1, roll to start your turn"
      
      // BONUS: Player win counters are set at 0
}

const makeMove = () => {
      // While loop to keep running function until player is done

      // Click the roll button to initiate a roll
      // Randomize each dice and return a value, represented with correct photo
      // updating state variables & DOM
      updateDice();

      // Check score combos to determine dice that are counters.
      isDiceCounter();

      // STRETCH: Make valuable dice clickable
      clickDice();

      // STRETCH: Display "Player 1, Please select your dice."
      // or, "You Rolled garbage! You scored 0 points. Player 2, it's your turn."
}

const isDiceCounter = () => {
      // Check through score arrays to see if returned dice values are worth points.
      // let valuableDice = diceValues.filter(value => value === 2)
      if(rolledOnes.length >= 1)
            clickableDice.push(rolledOnes)
            console.log(clickableDice)

      
      // Filter out numbers from diceValues array that don't match win conditions (for each win condition)
      // Check to see that array is correct length (for each win condition)
      
      // STRETCH: Make valuable dice clickable

      // Put valuable dice in clickable array
      
      // Put non-valuable dice in unclickable array
      
      // BONUS: Gray out dice that are not valuable/not clickable.

}

const updateDice = () => {
      diceValues.length = 0
      let allDice = diceEl.children;
      // Randomize each dice and return a value, represented with correct photo *DONE*
      for(let i = 0; i < allDice.length; i++) {
            randValue = Math.floor(Math.random() * 6) + 1
            allDice[i].id = `dice-${randValue}`
            diceValues.push(randValue)
            // push all values into an array holding dice side values (diceValues) *DONE*
      }
      
      let rolledOnes = diceValues.filter(number => number === 1)
      console.log(rolledOnes)
      
      let rolledTwos = diceValues.filter(number => number === 2)
      console.log(rolledTwos)
      
      let rolledThrees = diceValues.filter(number => number === 3)
      console.log(rolledThrees)
      
      let rolledFours = diceValues.filter(number => number === 4)
      console.log(rolledFours)
      
      let rolledFives = diceValues.filter(number => number === 5)
      console.log(rolledFives)
      
      let rolledSixes = diceValues.filter(number => number === 6)
      console.log(rolledSixes)
      
      // Figure out how to code large straight
      // let largeStraight = diceValues.filter(number => number == 
      // console.log(largeStraight)
      
      
      if(rolledOnes.length >= 1)
                  clickableDice.push(rolledOnes)
                  console.log(clickableDice)
      
      if(rolledTwos.length >= 3)
                  clickableDice.push(rolledTwos)
                  console.log(clickableDice)
      
      if(rolledThrees.length >= 3)
                  clickableDice.push(rolledThrees)
                  console.log(clickableDice)
      
      if(rolledFours.length >= 3)
                  clickableDice.push(rolledFours)
                  console.log(clickableDice)
      
      if(rolledFives.length >= 1)
                  clickableDice.push(rolledFives)
                  console.log(clickableDice)
      
      if(rolledSixes.length >= 3)
                  clickableDice.push(rolledSixes)
                  console.log(clickableDice)
}

const clickDice = () => {
      // STRETCH: remove or add dice from the clickable dice array

      // STRETCH: Calculate current round score with each dice clicked/unclicked.

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
