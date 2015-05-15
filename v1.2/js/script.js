$(document).ready(function() {
  var playerChar = 'CAT';
  var currentPlayer = 'X';
  var moveCount = 0;

  //Event Listener for Character Selection
  $('.animal').click(function() {
    var beast = $(this).html();
    if (beast == 'CAT') {
      $('#playerOne').html('Cat');
      $('#playerTwo').html('Dog');
      $('#leftside').html('<img class="animated slideInLeft" src="images/Lcat.png">');
      $('#rightside').html('<img class="animated slideInRight" src="images/Rdog.png">');
    }
    else if (beast == 'DOG') {
      $('#playerOne').html('Dog');
      $('#playerTwo').html('Cat');
      $('#leftside').html('<img class="animated slideInLeft" src="images/Ldog.png">');
      $('#rightside').html('<img class="animated slideInRight" src="images/Rcat.png">');
    }
    return playerChar = beast;
  })

  //Event Listener for Piece Selection
  $('.xo').click(function() {
    return currentPlayer = $(this).html();
  })

  //Event Listener for Start Button
  $('#start').click(function() {
    $('#charModal').toggle();
    $('#game-container').toggle();
  })

  //This function creates a New Gameplay Array
  function newArray() {
    return { a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: ''};
  }
  var cells = newArray();

  //This function sets the moveCount to zero
  function resetCount() {
    return moveCount = 0;
  }

  //Event Listener for Reset Game Button
  $('#reset').click(function() {
    $('.cell').html('');
    $('#end-container').toggle();
    resetCount();
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
    moveCount += 1;

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

      //Checks if all three claims equal currentPlayer
      function allThree(cellOne, cellTwo, cellThree) {
        return (checkClaim(cellOne) == currentPlayer && checkClaim(cellTwo) == currentPlayer && checkClaim(cellThree) == currentPlayer);
      }

      //Checks for a row
      function row() {
        return allThree('a', 'b', 'c') || allThree('d', 'e', 'f') || allThree('g', 'h', 'i');
      }

      //Checks for a column
      function column() {
        return allThree('a', 'd', 'g') || allThree('b', 'e', 'h') || allThree('c', 'f', 'i');
      }

      //Checks for a diagonal slash
      function diagon() {
        return allThree('a', 'e', 'i') || allThree('c', 'e', 'g');
      }

      //Checks for three in a row, column, or diagonal
      function isGame() {
        return row() || column() || diagon();
      }

      //Finally getWinner executes all above functions
      if (moveCount < 9) {
        if (isGame()) {
          $('#winner').html(currentPlayer);
          $('#end-container').toggle();
        }
      }
      else if (moveCount == 9) {
        if (isGame()) {
          $('#winner').html(currentPlayer);
          $('#end-container').toggle();
        }
        else {
          $('#winner').html('TIE');
          $('h3').html('GAME!!!');
          $('#end-container').toggle();
        }
      }


    };
    getWinner();
    switchPlayer(currentPlayer);
  });

})