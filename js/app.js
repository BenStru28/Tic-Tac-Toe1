let board = ["", "", "", "", "", "", "", "", ""];
let turn = "X";
let winner = false;
let tie = false;
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const squareEls = document.querySelectorAll(".sqr");
const messageEls = document.getElementById("message");
const restartEls = document.getElementById("restartBtnEl");
document.querySelectorAll(".sqr");

for (const element of squareEls) {
  element.addEventListener("click", handleClick);
}
restartEls.addEventListener("click", function () {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  init();
});

functiom