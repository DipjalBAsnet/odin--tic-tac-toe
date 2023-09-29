const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const makeMove = (index, symbol) => {
    if (board[index] === "") {
      board[index] = symbol;
      return true;
    } else {
      return false;
    }
  };

  const resetboard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, makeMove, resetboard };
})();
