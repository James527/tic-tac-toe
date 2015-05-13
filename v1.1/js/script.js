$(document).ready(function() {

	var playerOne = 'X';
	var playerTwo = 'O';
  var currentPlayer = playerOne;
  var cells = {a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: ''};

  //This function is an X/O Switch
  function switchPlayer(player) {
    if (player == 'X') {
      return currentPlayer = 'O';
    }
    else if (player == 'O') {
      return currentPlayer = 'X';
    }
  };

	//This function creates a New Game Play Array
  function gameReset() {
    return cells = { a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: ''}
  };

  //Display Move in HTML
  function addMove(value) {
    $(self).html(value);
  };

  function appendArray(value) {

  };

	//Event Listener for cell clicks
  $('.cell').click(function() {
    var player = currentPlayer;
    var self = this;
    
    addMove(player);
    switchPlayer(currentPlayer);
  });

  //Event Listener for Reset Game Button
  $('#reset').click(function() {
    
  });

	//Check for End Game
  function getWinner() {

  };

  // alert(currentPlayer);

})