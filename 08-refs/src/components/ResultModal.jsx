import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, handleReset },
  ref
) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  const lost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={dialogRef} className="result-modal" onClose={handleReset}>
      {lost && <h2> You lost </h2>}
      {!lost && <h2> You won! Score : {score} </h2>}
      <p>
        The target time was <strong>{targetTime} seconds </strong>.
      </p>
      {lost && <p>The timer expired before you could stop it</p>}
      {!lost && (
        <p>
          You stopped the timer with{" "}
          <strong>{formattedTime} seconds left</strong>
        </p>
      )}

      <form method="dialog" onSubmit={handleReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
