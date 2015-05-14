$(document).ready(function() {

	var playerOne = 'X';
	var playerTwo = 'O';
  var currentPlayer = playerOne;

  //This function creates a New Gameplay Array
  function newArray() {
    return { a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: ''};
  }
  var cells = newArray();

  //Event Listener for Reset Game Button
  $('#reset').click(function() {
    $('.cell').html('');
    return cells = newArray();
  });

  //This function is an X/O Switch
  function switchPlayer(player) {
    if (player == 'X') {
      return currentPlayer = 'O';
    }
    else if (player == 'O') {
      return currentPlayer = 'X';
    }
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
    function claimCell(cell, value) {
      return cells[cell] = value;
    }
    claimCell(cellLetter, player);

    //This function checks for an End Game scenario
    function getWinner() {

      //Gets cell value from array
      function checkClaim(letter) {
          return cells[letter];
      }

                    //FUNCTIONS FOR X:

      //Checks if all three claims equal X
      function threeX(cellOne, cellTwo, cellThree) {
        return (checkClaim(cellOne) == 'X' && checkClaim(cellTwo) == 'X' && checkClaim(cellThree) == 'X');
      }

      //Checks for a row of X's
      function rowX() {
        return threeX('a', 'b', 'c') || threeX('d', 'e', 'f') || threeX('g', 'h', 'i');
      }

      //Checks for a column of X's
      function columnX() {
        return threeX('a', 'd', 'g') || threeX('b', 'e', 'h') || threeX('c', 'f', 'i');
      }

      //Checks for a diagonal slash of X's
      function diagonX() {
        return threeX('a', 'e', 'i') || threeX('c', 'e', 'g');
      }

      //Checks if X has three in a row, column, or diagonal
      function isX() {
        return rowX() || columnX() || diagonX();
      }

                    //FUNCTIONS FOR O:

      //Checks if all three claims equal O
      function threeO(cellOne, cellTwo, cellThree) {
        return (checkClaim(cellOne) == 'O' && checkClaim(cellTwo) == 'O' && checkClaim(cellThree) == 'O');
      }

      //Checks for a row of O's
      function rowO() {
        return threeO('a', 'b', 'c') || threeO('d', 'e', 'f') || threeO('g', 'h', 'i');
      }

      //Checks for a column of O's
      function columnO() {
        return threeO('a', 'd', 'g') || threeO('b', 'e', 'h') || threeO('c', 'f', 'i');
      }

      //Checks for a diagonal slash of O's
      function diagonO() {
        return threeO('a', 'e', 'i') || threeO('c', 'e', 'g');
      }

      //Checks if O has three in a row
      function isO() {
        return rowO() || columnO() || diagonO();
      }


      if (isX()) {
        alert('X WINS!!!');
      }
      else if (isO()) {
        alert('O WINS!!!');
      }

    };
    getWinner();
    switchPlayer(currentPlayer);
  });

})