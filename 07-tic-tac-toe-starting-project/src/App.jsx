import { act, useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => {
      return currentPlayer === "X" ? "O" : "X";
    });

    setGameTurns((prevGameTurns) => {
      // we're inferring the active symbol instead of just re-using the active player symbol since its bad practice to instersect states
      let activeSymbol = "X";
      if (prevGameTurns.length > 0 && prevGameTurns[0].symbol === "X") {
        activeSymbol = "O";
      }
      let updatedGameTurns = [
        { row: rowIndex, col: colIndex, symbol: activeSymbol },
        ...prevGameTurns,
      ];
      return updatedGameTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActivePlayer={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActivePlayer={activePlayer === "O"}
          />
        </ol>
        <GameBoard onClickHandler={handleSelectSquare} turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
