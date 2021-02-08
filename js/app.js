/* Constants */
let FIRST_PLAYER = "Player 1"

let rolledOne = 1
let rolledFive = 5
let threeTwos = [2, 2, 2]
let threeThrees = [3, 3, 3]
let threeFours = [4, 4, 4]
let threeFives = [5, 5, 5]
let threeSixes = [6, 6, 6]
let largeStraight = [1, 2, 3, 4, 5]

/* Game Logic Variables and State */
const dice = [1, 2, 3, 4, 5, 6]

const scoreStates = {
      rolledOne: false,
      rolledFive: false,
      threeOnes: false,
      threeTwos: false,
      threeThrees: false,
      threeFours: false,
      threeFives: false,
      threeSixes: false,
      largeStraight: false
}

let scoreValues = {
      rolledOne: 100,
      rolledFive: 50,
      threeOnes: 1000,
      threeTwos: 200,
      threeThrees: 300,
      threeFours: 400,
      threeFives: 500,
      threeSixes: 600,
      largeStraight: 1500
}

const unclickedDice = [1, 2, 3, 4, 5]
const clickableDice = []
const unclickableDice = []

const player1Score = 0
const player2Score = 0
const player1Wins = 0
const player2Wins = 0

/* DOM References */
let rollButtonEl = document.querySelector('#roll-button')
let scoreButtonEl = document.querySelector('#keep-score-button')
let diceEl = document.querySelectorAll('.dice')

/* Functions and Game Logic */

const initialize = () => {
      // Initialize game with original game state.
      // Roll button value says roll
      rollButtonEl.innerText = 'Roll the dice!'
      // Scores are set at 0
      player1Score = null
      player2Score = null
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
}

const updateDice = (event) => {
      
      // Randomize each dice and return a value, represented with correct photo
      for(let i = 1; i < 6; i++) {
            randValue = math.floor(math.random() * i)
            event.target.id = `Side-${randValue}`
      }


}

const clickDice = () => {
      // STRETCH: Make valuable dice clickable

      // STRETCH: Calculate current round score with each dice clicked.

      // BONUS: Gray out dice that are not valuable/not clickable.
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
