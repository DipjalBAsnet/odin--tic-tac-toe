let player1Name = "";
let player2Name = "";

const startGame = () => {
  player1Input = document.getElementById("player1Name");
  player2Input = document.getElementById("player2Name");

  const player1Name = player1Input.value.trim();
  const player2Name = player2Input.value.trim();

  if (player1Name !== "" && player2Name !== "") {
    // Hide input fields and start button after game starts
    const inputContainer = document.querySelector(".input-container");
    inputContainer.style.display = "none";

    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML = `${player1Name} vs ${player2Name}`;

    const boardContainer = document.querySelector(".board-container");
    boardContainer.style.display = "block";

    const restartButton = document.querySelector(".reset-button");
    restartButton.style.display = "block";

    gameController.startGame(player1Name, player2Name);
    renderBoard();
  } else {
    // Notify the user to enter both player names
    alert("Please enter both player names.");
  }
};

const renderBoard = () => {
  const boardElement = document.getElementById("board");
  const boardState = gameBoard.getBoard();
  const winningpattern = gameController.checkWinningPattern();

  boardElement.innerHTML = "";

  for (let i = 0; i < boardState.length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (winningpattern && winningpattern.includes(i)) {
      cell.classList.add("winning-cell");
    }

    cell.textContent = boardState[i] || "";

    cell.addEventListener("click", clickHandler);

    boardElement.appendChild(cell);
  }
};

const clickHandler = (event) => {
  const cell = event.target;
  const index = Array.from(cell.parentNode.children).indexOf(cell);

  if (!cell.textContent) {
    const moveResult = gameController.playMove(index);
    if (moveResult) {
      renderBoard();
    }
  }
};

renderBoard();

const resetGame = () => {
  gameBoard.resetBoard();
  gameController.resetGame();
  renderBoard();

  document.getElementById("resultDisplay").innerHTML = "";
  document.querySelector(".input-container").style.display = "block";
};

gameController.startGame();
renderBoard();
