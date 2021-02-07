# Project 1: Roll to 5000!
## A Dice Game for the Whole Family

Roll to 5000 is a dice game that pits your luck against your probability skills, with a little bit of strategy thrown in! Two players will face off, rolling dice to see if they can find valuable combinations. Then they must make a difficult decision: keep the points or test their luck and roll for more!

This is a fun game that uses a lot of the skills we’ve been using in class over the first couple weeks. There’s a lot of functionality, win and loss states, combinations, and possibilities of actions to take during a turn. It will be a fun and interesting challenge to code my way through the game, plugging in certain functions depending upon many conditionals, and applying a lot looping through arrays. It seems like a good test on my current skills, while also having a reasonable scope for the project time limit. And I also think it will be fun to play when it’s complete!

## Rules

**Object of the game:** To be the first player to bank 5000 points.

Two players take turns rolling 5 dice. On your turn, after every roll, you have the option to keep valuable dice, called counters.

>**Counters are 1s, 5s, or certain combinations of multiple dice.** See Dice Values chart below.

After you decide which counters you’ll be keeping, you have the option to bank those points in your total score, or to roll the remaining dice - **called garbage** - and see if you can roll more counters.\
If you manage to roll all 5 dice as counters, you may continue your turn by re-rolling all 5 dice, continuing to tabulate your score.\
If you choose to bank your points instead of roll, your round score is added to your total score, and play continues with the next player.\
Likewise,  If a roll ever returns with no counters, your turn is over and you lose all points from this round, passing play to your opponent.\
Each player must earn 350 points in a round before they can begin keeping score.\
The game ends when a player reaches a total score of 5000 points.

>### Dice Values:
>**Ones and Fives:**\
1’s = 100 points each\
5’s = 50 points each\
\
**Three of a kind:**\
Three 2’s = 200 points\
… 3’s = 300 points\
… 4’s = 400 points\
… 5’s = 500 points\
… 6’s = 600 points\
… 1’s = 1000 points\
\
**Large Straight:**\
Rolling a 1-2-3-4-5 in a single roll = 1500 points

## Wireframes

## User Stories
* When I load the page, there are 5 unrolled dice on the screen.
* Player 1’s turn starts when I click the roll button, and the dice are randomized and returned with new values.
* Then I have the option to click on point-scoring dice (counters).
* After clicking on counters, I can either click to keep my points or to roll again.
* When I click on the keep my points button, the assigned point-value of the counters is added to player 1’s score, and player 2’s turn begins.
* When I click on the Roll again button, the remaining dice (garbage; dice that I did not click to keep) are randomized and returned with new values.
* I have the same options as before, to click on counters, and then choose to keep points or roll again.
* If all 5 dice are able to be kept as counters, I continue my turn by rolling all dice again while my score continues to tabulate.
* If I ever choose to roll the dice and no counters are returned, my turn immediately ends. All of my points from this round - from counters that are kept aside - are forfeited, and the next player’s turn begins.
* A player must reach 350 points in one round before they can start tabulating a running score.
* After every roll, dice values and win-combinations are checked to see which dice are counters and which are garbage.
* The game play ends when one player reaches a score of 5000 points.

## MVP Checklist
This will be the simplest version of the game, with limited functionality.
* When I load the page, there are 5 unrolled dice on the screen.
* When I click the roll button, the dice are randomized and returned with new values.
* Run through all win combos to determine value of dice.
* The value of my roll is tabulated and added to my total score.
* Play passes to the second player.
* The game ends when one player reaches 5000 points.

## Stretch Goals
These will flesh out the full functionality of the game, including all states.
* Ability to click on dice to keep them aside.
* Be able to choose between rolling again and banking points before passing the dice.
* Have player’s turn continue if all 5 dice are counters.
* Keeping a running round score as well as a running player total score.
* Players must bank 350 points in round before they can start keeping score.
* Add a Play Again button after a game is finished.

## Bonus Goals
These goals are for fun, after MVP and stretch: what else can we do with this game?
* Make a 6 dice version with further scoring combinations.
* Make the game playable with up to 4 players
* Add more messages in the message box throughout the game.
* Highlight dice that are counters, and gray out dice that are garbage.
* Add sound effects for rolling and clicking on dice.