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
let unClickedDice = [];

let isGameWon = false;

let isGamePaused = true;

/* DOM References */
const rollButtonEl = document.querySelector('#roll-button')
const reRollButtonEl = document.querySelector('#re-roll-button')
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
      
      clearOutline();

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
      rollButtonEl.classList.add("hidden");
}

const createDiceValues = () => {
      diceValues.length = 0
      let allDice = diceEl.children;
      for(let i = 0; i < allDice.length; i++) {
            randValue = Math.floor(Math.random() * 6) + 1
            allDice[i].dataset.value = `${randValue}`
            allDice[i].className = `dice dice-${randValue}`
            diceValues.push(allDice[i])
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

const updateClickScore = () => {
      let clickedDiceValues = []

      for(let i = 0; i < clickedDice.length; i++) {
            // console.log(clickedDice[i].dataset.value)
            clickedDiceValues.push(parseInt(clickedDice[i].dataset.value))
      }

      let rolledOnes = clickedDiceValues.filter(number => number === 1);
      let rolledTwos = clickedDiceValues.filter(number => number === 2);
      let rolledThrees = clickedDiceValues.filter(number => number === 3);
      let rolledFours = clickedDiceValues.filter(number => number === 4);
      let rolledFives = clickedDiceValues.filter(number => number === 5);
      let rolledSixes = clickedDiceValues.filter(number => number === 6);
      let rolledStraight = clickedDiceValues.sort(function(a, b){return a-b}).toString();

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
      console.log(roundScore);
      console.log(clickedDiceValues);
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
            messageBoxEl.textContent = `You added ${roundScore} points to your score. ${currentPlayer}, it's your turn!`
            }
      } else if(currentPlayer === "Player 2") {
            currentPlayer = "Player 1"
            if(roundScore < 350 && player2Score < 350) {
                  messageBoxEl.textContent = `You need 350 points to get on the board. ${currentPlayer}, it's your turn!`
            } else {
            messageBoxEl.textContent = `You added ${roundScore} points to your score. ${currentPlayer}, it's your turn!`
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
      let clickedDiceIndex = clickedDice.indexOf(selectedDice);
      let unClickedDiceIndex = unClickedDice.indexOf(selectedDice);
      
      if(clickedDice.includes(selectedDice) === false) {
            clickedDice.push(selectedDice);
      } else {
            clickedDice.splice(clickedDiceIndex, 1);
      }

      if(selectedDice.classList.contains('red')) {
            selectedDice.classList.remove('red');
      } else {
            if(selectedDice == diceEl) {
                  return
            }
            selectedDice.classList.toggle('red');

            
            if(clickedDice.length > 0) {
                  scoreButtonEl.classList.remove("hidden");
            }
            
      }
      
      updateClickScore();



      for(let i = 0; i < diceValues.length; i++) {
            if(unClickedDice.includes(selectedDice)) {
                  break
            }
            if(diceValues[i].classList.contains('red') === false) {
                  unClickedDice.push(diceValues[i]);
            }


            // }if(unClickedDice.includes(diceValues[i]) === true) {
            //       return
            // } else if(unClickedDice.includes(diceValues[i]) === false) {
            //       unClickedDice.push(diceValues[i]);
            // }
      }



      // if(clickedDice.includes(







}

const clearOutline = () => {
      for(let i = 0; i < singleDiceEl.length; i++) {
            if(singleDiceEl[i].classList.contains('red')) {
                  singleDiceEl[i].classList.remove('red')
            }
      }
}

const reRollDice = () => {
      isGamePaused = false;
      messageBoxEl.textContent = `${currentPlayer}, please select more dice.`
      for(let i = 0; i < singleDiceEl.length; i++) {
            if(singleDiceEl[i].classList.contains('red')) {
                  return
            } else {
                  singleDiceEl[i].classList.remove('red')
                  // index of

            }
      }
}

/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)
rollButtonEl.addEventListener("click", rollDice)
reRollButtonEl.addEventListener("click", reRollDice)
scoreButtonEl.addEventListener("click", keepScore)
resetButtonEl.addEventListener("click", initialize)
diceEl.addEventListener("click", clickDice)

/*------Game End------*/

/*-----Roll Button-----*/

/*-----Keep Score Button-----*/

/*-----Player Score -----*/

/*-----Clicking Dice-----*/
// HARD: Dice should have value before they are clicked, so we can determine which dice to gray out
      // To gray out dice, for each dice, if they DON'T meet score conditionals, gray them out.
      // MEDIUM: Display "Player X, you rolled garbage and scored 0 points. Player X it's your turn"
      // HARD: Make unvaluable dice unclickable (and gray them out), make valuable dice clickable
// MEDIUM: Add ability to re-roll and continue tabulating score after all 5 dice are clicked (reset clickedDice array)
      // When all 5 dice have value, add new button that says Keep Score and Roll again.
// EASY: Hide and show re-roll button at the correct times.
// HARD: Give player option to roll again or to keep score after selecting dice
// MEDIUM: Fix issue when player 1 wins
// EASY: Put scoring guide on the bottom of the page
// EASY: Put rules guide on bottom of page


// remove clicked dice from diceValues array at beginning of re-roll function
      //  maybe moving to a new, unclickable array?
//  do that by finding index of dice that contain red class, and splicing them from diceValues array
// modify createDiceValues function inside re-roll to work with new array length.
// freeze dice that were already clicked, so after re-roll, they can't be unclicked
// will also have to remove previous clicked dice from clickedDice array.




// Dice sit in:
      // diceValues array (all dice)
      // class of dice (all dice)
      // class of dice-X (individual dice of same number)
      // individual dataset value (individual dice of same number)
      // class of red (dice divs of clicked dice)
      // clickedDice array (dice divs of clicked dice)
      // clickedDiceValues array (integer values of clicked dice)

// When I execute the rollDice function, I randomize the diceValues array.
// When I execute the reRollDice Function, I need to randomize a new array.
// The new array will be dice that are not clicked.
// If dice do not have the class of red, put them into a new array - unClickedDice
// Add and remove instead of continuing to add
// copy the roll and randomize function into re-roll to work with unClickedDice
// Then we will need a new clickedDice array
// a new clickedDiceValues array
// and new score conditionals