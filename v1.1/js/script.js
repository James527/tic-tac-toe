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
  }

	//This function creates a New Gameplay Array
  function gameReset() {
    return cells = { a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: ''}
  }

	//Event Listener for cell clicks
  $('.cell').click(function() {
    var player = currentPlayer;
    var cellLetter = $(this).attr('value');
    var self = this;

    //Display Move in HTML
    function addMove(value) {
      $(self).html(value);
    }
    addMove(player);

    //Adds player move into Gameplay Array
    function claimArrayCell(cell, value) {
      return cells[cell] = value;
    }
    claimArrayCell(cellLetter, player);

    //Check for End Game
    function getWinner() {
      // alert(cells[].length);
    };
    getWinner();


    switchPlayer(currentPlayer);
  });

  //Event Listener for Reset Game Button
  $('#reset').click(function() {
    
  });

  

})