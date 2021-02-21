// Business Logic for Player
function Player() {

}



Player.prototype.mark = function(choice) {
  if(choice === "X") {
    return "X";
  } else if(choice === "O") {
      return "O"
  } else {
      return "Invalid choice"
  }
};

let testPlayer = new Player(); 
console.log(testPlayer.mark("X"));

//Business Logic for Space
function Space() {

}

//Business Logic for Board

function Board() {

}

//Business Logic for Board
function Game() {
  
}

