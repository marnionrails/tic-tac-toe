# Tic-tac-toe

#### Two users play the game of tic-tac-toe

#### By _**Marni Sucher Jesse Callahan**_

## Technologies Used

* HTML/CSS
* JavaScript
* jQuery
* Bootstrap
* Markdown
* Git
* VS Code

## Description

Two users play the game of tic-tac-toe.

* A player should know whether it's an X or an O and be able to report that (e.g. player.mark() could return "X" or "O").

* A space should know its coordinates and be able to be marked by a player (e.g., space.mark(player_X)).

* A space should be able to report who it's marked by (e.g. space.markedby() could return "X" or "O", or it could return a player object - _player1 or player2).

* A board should create 9 spaces with the proper coordinates, and tell if there are three in a row marked by the same player. A board should be able to return a space by its coordinates (e.g., board.find(1, 2)).

* A game should create 2 players and a board, be able to move to the next turn, know which player's turn it is, and be able to tell if the game is over or not.

## Tests

Test 1: Describe: player.mark()
Test: "It will return x, y or invalid choice, depending on users' choice"
Expect("X").toEqual("X");
Expect("O").toEqual("O");
Expect([anything else]).Equal("Invalid Choice");


## Setup/Installation Requirements

* Clone repository: https://github.com/marnionrails/tic-tac-toe
* Open Tic-tac-toe folder
* Open index.html in your web browser

## Known Bugs

* None at this time.

## License

The project is under the GPL license.

## Contact Information

Marni Sucher at <suchermarni@gmail.com> or Jesse Callahan at <jessetylercallahan@gmail.com>
