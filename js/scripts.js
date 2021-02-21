// Business Logic for Player
function Player(name, marker) {
  this.name = name;
  this.marker = marker; 
}

Player.prototype.mark = function(choice) {
    if(choice === "X") {
      return "X";
  } else if(choice === "O") {
      return "O";
  } else {
      return "Invalid choice"
  }
};

let testPlayer = new Player("Marni", "X"); 
let testPlayer2 = new Player("Jesse", "O");

console.log(testPlayer);
console.log(testPlayer2);

//Business Logic for Space
function Space(markedBy) {
  this.square = 0;
  this.markedBy = markedBy
}

Space.prototype.spaceMarked = function(marked) {
      if (marked === 1) {
        this.square = 1;
    } else if(marked === 2) {
        this.square = 2;
    } else if(marked === 3) {
        this.square = 3;
    } else if(marked === 4) {
        this.square = 4;
    } else if(marked === 5) {
        this.square = 5;
    } else if(marked === 6) {
        this.square = 6;
    } else if(marked === 7) {
        this.square = 7;
    } else if(marked === 8) {
        this.square = 8;
    } else if(marked === 9) {
        this.square = 9;
    } else {
        return "Not a square";
    }

  return this.square;
}

let occupiedSpace = new Space("Marni");
console.log(occupiedSpace.spaceMarked(8));
console.log(occupiedSpace)

//Business Logic for Board

function Board(newBoard) {
this.board = newBoard
}

console.log()
//Business Logic for Board
function Game() {
  
}

