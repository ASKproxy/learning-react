import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  // timer started is a state variable
  // when we execute handleStart we should store a pointer
  // to the timer in a ref variable.
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerRef = useRef();
  const dialogRef = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearTimeout(timerRef.current);
    dialogRef.current.open();
  }

  function handleStart() {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 100);
    }, 100);
  }

  function handleStop() {
    clearTimeout(timerRef.current);
    dialogRef.current.result = "won";
    dialogRef.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        handleReset={handleReset}
      />
      <section className="challenge">
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          Timer is {timerIsActive ? "running..." : "inactive"}
        </p>
      </section>
    </>
  );
}
