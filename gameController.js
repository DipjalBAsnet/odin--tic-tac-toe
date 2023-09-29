const gameController = (() => {
  let currentPlayer;
  let player1;
  let player2;

  const startGame = () => {
    //initialize players
    player1 = playerFactory("player 1", "X");
    player2 = playerFactory("player 2", ")");
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
    }
    return moveResult;
  };

  const resetgame = () => {
    gameBoard.resetboard();
    currentPlayer = player1;
  };

  return { startGame, getCurrentPlayer, switchPlayer, playMove, resetgame };
})();
