// Tic Tac Toe game
var board = ['', '', '', '', '', '', '', '', ''];
var player = 'X';
var computer = 'O';
var currentPlayer = player;

// Function to check if the game is over
function isGameOver() {
  var winningCombinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6] 
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
}

// Function to check if the game is a tie
function isTie() {
  return !board.includes('');
}

// Function to make the player's move
function makePlayerMove(cell) {
  if (board[cell] === '') {
    board[cell] = player;
    currentPlayer = computer;
    if (!isGameOver() && !isTie()) {
      makeComputerMove();
    }
  }
  displayBoard();
  checkGameStatus();
}

// Function to make the computer's move
function makeComputerMove() {
  var availableCells = [];
  for (var i = 0; i < board.length; i++) {
    if (board[i] === '') {
      availableCells.push(i);
    }
  }
  var randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
  board[randomCell] = computer;
  currentPlayer = player;
  displayBoard();
  checkGameStatus();
}

// Function to display the board
function displayBoard() {
  var boardContainer = document.getElementById('board');
  boardContainer.innerHTML = '';
  for (var i = 0; i < board.length; i++) {
    var cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    cell.addEventListener('click', function() {
      if (currentPlayer === player) {
        makePlayerMove(parseInt(this.dataset.index));
      }
    });
    cell.innerHTML = board[i];
    boardContainer.appendChild(cell);
  }
}

// Function to check the game status
function checkGameStatus() {
  if (isGameOver()) {
    setTimeout(function() {
      alert('Game over! ' + currentPlayer + ' wins!');
      resetGame();
    }, 100);
  } else if (isTie()) {
    setTimeout(function() {
      alert('It\'s a tie!');
      resetGame();
    }, 100);
  }
}

// Function to reset the game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = player;
  displayBoard();
}

// Initial setup
displayBoard();


function startIntro2(){
  document.getElementById("box1").style.display = "none";
  document.getElementById("box2").style.display = "block";
  document.getElementById("computerBox").style.display = "none";


 var x = document.getElementById(`playername`).value;
  document.getElementById("t1").innerHTML = x;

}

