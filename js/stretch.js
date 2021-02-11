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

let largeStraight = 0;

let clickedDice = [];

let isGameWon = false;

let isGamePaused = true;

/* DOM References */
const rollButtonEl = document.querySelector('#roll-button')
const scoreButtonEl = document.querySelector('#keep-score-button')
const resetButtonEl = document.querySelector('#reset-button')
const diceEl = document.querySelector('.all-dice')
const messageBoxEl = document.querySelector('#message-box')
const score1 = document.querySelector('#player-1-score')
const score2 = document.querySelector('#player-2-score')
const singleDiceEl = document.querySelectorAll('.dice')

/* Functions and Game Logic */
const initialize = () => {
      currentPlayer = FIRST_PLAYER;

      isGameWon = false;
      
      isGamePaused = true;

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
      isGamePaused = false;
      messageBoxEl.textContent = `${currentPlayer}, please select your dice.`
      clearOutline();
      createDiceValues();
      // scoreButtonEl.classList.remove("hidden");
      // addScore();
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

// const addScore = () => {
//       let rolledOnes = diceValues.filter(number => number === 1)
//       let rolledTwos = diceValues.filter(number => number === 2)
//       let rolledThrees = diceValues.filter(number => number === 3)
//       let rolledFours = diceValues.filter(number => number === 4)
//       let rolledFives = diceValues.filter(number => number === 5)
//       let rolledSixes = diceValues.filter(number => number === 6)
//       let rolledStraight = diceValues.sort(function(a, b){return a-b});

//       if(rolledOnes.length < 3) {
//             onesTotal = (rolledOnes.length * 100);
//       } if(rolledOnes.length === 3) {
//             threeOnes = 1000;
//       } if(rolledOnes.length === 4) {
//             fourOnes = 1100;
//       } if(rolledOnes.length === 5) {
//             fiveOnes = 1200;
//       } if(rolledTwos.length >= 3) {
//             twosTotal = 200;
//       } if(rolledThrees.length >= 3) {
//             threesTotal = 300;
//       } if(rolledFours.length >= 3) {
//             foursTotal = 400;
//       } if(rolledFives.length < 3) {
//             fivesTotal = (rolledFives.length * 50);
//       } if(rolledFives.length === 3) {
//             threeFives = 500;
//       } if(rolledFives.length === 4) {
//             fourFives = 550;
//       } if(rolledFives.length === 5) {
//             fiveFives = 600;
//       }if(rolledSixes.length >= 3) {
//             sixesTotal = 600;
//       }if(rolledStraight.length === 5 && rolledStraight === [1, 2, 3, 4, 5]) {
//             largeStraight = 1500;
//       }


//       roundScore = onesTotal + twosTotal + threesTotal + foursTotal + fivesTotal + sixesTotal +threeOnes + fourOnes + fiveOnes + threeFives + fourFives + fiveFives
      
//       if(roundScore === 0) {
//             messageBoxEl.innerText = `${currentPlayer}, you rolled garbage! Your current round score is ${roundScore}.`
//             rollButtonEl.classList.remove("hidden");
//       }
// }

const addClickScore = () => {
      let rolledOnes = clickedDice.filter(number => number === 1);
      let rolledTwos = clickedDice.filter(number => number === 2);
      let rolledThrees = clickedDice.filter(number => number === 3);
      let rolledFours = clickedDice.filter(number => number === 4);
      let rolledFives = clickedDice.filter(number => number === 5);
      let rolledSixes = clickedDice.filter(number => number === 6);
      let rolledStraight = clickedDice.sort(function(a, b){return a-b}).toString();

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
      }if(rolledStraight === "1,2,3,4,5") {
            largeStraight = 1500;
            onesTotal = 0;
            fivesTotal = 0;
      }
      roundScore = onesTotal + twosTotal + threesTotal + foursTotal + fivesTotal + sixesTotal +threeOnes + fourOnes + fiveOnes + threeFives + fourFives + fiveFives + largeStraight
      
      messageBoxEl.innerText = `${currentPlayer}, you have selected ${clickedDice.length} dice. Your current round score is ${roundScore}.`
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
      
      clickedDice = [];

      checkForWin();

      isGamePaused = true;
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
      largeStraight = 0;
}

const changePlayers = () => {
      if(currentPlayer === "Player 1") {
            currentPlayer = "Player 2"
            if(roundScore < 350 && player1Score < 350) {
                  messageBoxEl.textContent = `You need 350 points to get on the board. ${currentPlayer}, it's your turn!`
            } else {
            messageBoxEl.textContent = `${currentPlayer}, it's your turn!`
            }
      } else if(currentPlayer === "Player 2") {
            currentPlayer = "Player 1"
            if(roundScore < 350 && player2Score < 350) {
                  messageBoxEl.textContent = `You need 350 points to get on the board. ${currentPlayer}, it's your turn!`
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

const clickDice = (event) => {
      if(isGamePaused === true) return;
      let selectedDice = event.target;

      if(selectedDice.classList.contains('red')) {
            console.log("toggle off")
            selectedDice.classList.remove('red');
      }
      else {
            if(selectedDice == diceEl) {
                  return
            }
            selectedDice.classList.toggle('red'); /*.toggle instead, later on */
            if(clickedDice.includes(selectedDice) === false) {
                  let diceId = selectedDice.id
                  let diceInt = parseInt(diceId.charAt(diceId.length - 1))
                  clickedDice.push(diceInt);
            } /*else {
                  const hasRed = () => {
                        if(selectedDice.classList.contains('red')) {
                              return
                        }
                  }
                  let diceIndex = clickedDice.findIndex(hasRed)
                  clickedDice.splice(diceIndex, 1)
            }*/
            addClickScore();
      
            if(clickedDice.length > 0) {
                  scoreButtonEl.classList.remove("hidden");
            }

      }


}

const clearOutline = () => {
      for(let i = 0; i < singleDiceEl.length; i++) {
            if(singleDiceEl[i].classList.contains('red')) {
                  singleDiceEl[i].classList.remove('red')
            }
      }
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)
rollButtonEl.addEventListener("click", rollDice)
scoreButtonEl.addEventListener("click", keepScore)
resetButtonEl.addEventListener("click", initialize)
diceEl.addEventListener("click", clickDice)

/*------Game End------*/
// DEBUG player 1 winning issue

/*-----Roll Button-----*/

/*-----Keep Score Button-----*/

/*-----Player Score -----*/
// Code in large straight

/*-----Clicking Dice-----*/
// DEBUG clearing red border ON ALL DICE when clicking keep score.
// DEBUG Display, Player X, please select your dice if there's valuable dice
// Or display, Player X, you rolled garbage and scored 0 points. Player X it's your turn
// Dice should have value before they are clicked
// Make dice clickable if they have value
// Dice are not clickable if they have no value
// Display how many dice player has clicked in message box
// Allow option to click roll or keep score after clicking dice
// If clicked keep score, add round score to player score
// To gray out dice, for each dice, if they DON'T meet score conditionals, gray them out.
// To solve problem with dice having value: calculate value of dice before and after. Clicking puts them in new array.
// Need to reset clickedDice array every time keep score is clicked *DONE*
// Need to reset clickedDice array when all 5 are clicked.
// When all 5 dice have value, add new button that says Keep Score and Roll again.
// Make it so you can't click dice until roll is clicked - add isGamePaused variable *DONE*


// Add message that shows how many points player added to score.