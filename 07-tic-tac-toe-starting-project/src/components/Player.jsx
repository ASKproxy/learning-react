import { useState } from "react";

export default function Player({ initialName, symbol, isActivePlayer }) {
  const [editMode, setEditMode] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function onClickEdit() {
    setEditMode((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameSpan = <span className="player-name">{playerName}</span>;
  if (editMode) {
    playerNameSpan = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li className={isActivePlayer ? "active" : undefined}>
      <span className="player">
        {playerNameSpan}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickEdit}>{editMode ? "Save" : "Edit"}</button>
    </li>
  );
}
