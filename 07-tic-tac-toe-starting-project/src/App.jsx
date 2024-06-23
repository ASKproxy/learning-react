import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

function emptyGameState() {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
}

function getActiveSymbol(gameTurns) {
  let currentActiveSymbol = "X";
  if (gameTurns.length > 0 && gameTurns[0].symbol === "X") {
    currentActiveSymbol = "O";
  }
  return currentActiveSymbol;
}

function getSymbolFromState(gs, row, col) {
  return gs[row][col];
}

function isGameOver(gs) {
  for (const wc of WINNING_COMBINATIONS) {
    let first = getSymbolFromState(gs, wc[0].row, wc[0].column);
    let second = getSymbolFromState(gs, wc[1].row, wc[1].column);
    let third = getSymbolFromState(gs, wc[2].row, wc[2].column);
    if (first && first === second && first === third) {
      return first;
    }
  }
  return null;
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const [gameTurns, setGameTurns] = useState([]);
  let gameBoard = emptyGameState();
  for (const turn of gameTurns) {
    gameBoard[turn.row][turn.col] = turn.symbol;
  }

  let currentActiveSymbol = getActiveSymbol(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      // we're inferring the active symbol instead of just re-using the active player symbol since its bad practice to instersect states
      let activeSymbol = getActiveSymbol(prevGameTurns);

      // check if the game is over. if so, set the game over flag in the turn
      // we will check the game over flag at the beginning of App and
      // render the game board conditionally
      let updatedGameTurns = [
        {
          row: rowIndex,
          col: colIndex,
          symbol: activeSymbol,
          isGameOver: false,
        },
        ...prevGameTurns,
      ];

      return updatedGameTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }
  let winningSymbol = isGameOver(gameBoard);
  let hasDraw = gameTurns.length === 9;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActivePlayer={currentActiveSymbol === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActivePlayer={currentActiveSymbol === "O"}
          />
        </ol>
        {(winningSymbol || hasDraw) && (
          <GameOver winner={winningSymbol} onRestart={handleRematch} />
        )}
        <GameBoard onClickHandler={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <div>
        <Log turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
