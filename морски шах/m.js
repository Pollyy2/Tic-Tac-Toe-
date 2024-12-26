var rows = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var player = "X";
var hasWinner = false;
document.addEventListener("DOMContentLoaded", function() {
    addEventListeners();
});

function addEventListeners(){
    var squares = document.querySelectorAll(".square");
    squares.forEach(function(square, index){
        square.addEventListener("click", function(){
            playerTurn(player, index);
            
        });
    });
}
function playerTurn(player, squareIndex){
    // Проверка дали играта е приключила
    if (this.hasWinner) {
        console.log("The game has ended. Please refresh the page to start a new game.");
        return;
    }
    // Проверка дали квадратът вече е маркиран
    if (rows[squareIndex] !== " ") {
        console.log("This square is already marked. Please choose another one.");
        return;
    }

    // Маркиране на квадрата
    rows[squareIndex] = player;

    // Промяна на визуалното представяне на квадрата
    var squares = document.querySelectorAll(".square");
    squares[squareIndex].innerText = player;
 

    // Промяна на играча
    this.player = (this.player === "X") ? "O" : "X";
    checkWin();
}

function checkWin() {
    // Define winning combinations
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    // Check if any winning combination is achieved
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (rows[a] === rows[b] && rows[b] === rows[c] && rows[a] !== " ") {
            console.log("Player " + rows[a] + " wins!"); 
            this.hasWinner = true;
            return;
        }
    }

    // If no winning combination is found, check for a draw
    if (!rows.includes(" ")) {
        console.log("It's a draw!");
    }

};


