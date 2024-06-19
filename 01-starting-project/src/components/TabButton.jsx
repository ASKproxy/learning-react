export default function TabButton({ children, onClickProp, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={onClickProp}
      >
        {children}
      </button>
    </li>
  );
}
