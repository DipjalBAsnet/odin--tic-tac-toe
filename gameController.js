const gameController = (() => {
  let currentPlayer;
  let player1;
  let player2;

  const startGame = () => {
    //initialize players
    player1 = playerFactory("player 1", "X");
    player2 = playerFactory("player 2", "O");
    currentPlayer = player1;
  };

  const getCurrentPlayer = () => currentPlayer;

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const playMove = (index) => {
    const moveResult = gameBoard.makeMove(index, currentPlayer.symbol);

    if (moveResult) {
      switchPlayer();
      return true;
    } else {
      return false;
    }
  };

  const checkWinningPattern = () => {
    const board = gameBoard.getBoard();

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        isGameOver = true;
        return combination;
      }
    }
    return null;
  };

  const resetGame = () => {
    gameBoard.resetBoard();
    currentPlayer = player1;
  };

  return {
    startGame,
    getCurrentPlayer,
    switchPlayer,
    playMove,
    resetGame,
    checkWinningPattern,
  };
})();
