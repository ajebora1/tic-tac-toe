const displayStatus = document.querySelector('h2');
const players = {
    '1': 'X',
    '-1': 'O',
 }

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 1;
let isGameActive = true;
let gameWinner = {}
//let playerTurn = {}


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initGame() {
  //  let currentPlayer = 1;  
}
  

$("div").click(function(evt){
    if(board[evt.target.id] === '') {
        board[evt.target.id] = currentPlayer
        evt.target.innerText = players[currentPlayer]
        currentPlayer *= -1
           } else {
        console.log("not working")
    }
  });


$("#reset").click(function(evt) {
  $('#square div').each(function(idx) {
     this.innerText=''
  })
  board = ['', '', '', '', '', '', '', '', ''];
})
