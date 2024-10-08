export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.row}${turn.col}`}>
          {turn.symbol} selected {turn.row},{turn.col}
        </li>
      ))}
    </ol>
  );
}
