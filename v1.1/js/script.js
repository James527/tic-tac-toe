$(document).ready(function() {

	//X & O's Switch
	var playerOne = 'X';
	var playerTwo = 'O';
  var currentPlayer = playerOne;

  function switchPlayer(player) {
    if (player == 'X') {
      return currentPlayer = 'O';
    }
    else if (player == 'O') {
      return currentPlayer = 'X';
    }
  }
  // switchPlayer(currentPlayer);
  // alert(currentPlayer);

	//Game Play Array
  var cells = { a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: ''}


	//Display Move

	//Event Listener for cell clicks

	//Check for End Game

	//Reset Game

})