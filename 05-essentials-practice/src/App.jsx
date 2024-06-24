import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function emptyState() {
  return {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };
}

function App() {
  // header with image

  // main div with the input fields

  // list with results computed using the input fields

  // should we add a submit button or just load dynamically?

  const [inputState, setInputState] = useState(emptyState());

  const inputIsValid = inputState.duration >= 1;

  return (
    <>
      <Header />
      <main>
        <UserInput inputState={inputState} setUserInput={setInputState} />
        {!inputIsValid && (
          <p className="center">Please enter duration greater than 0</p>
        )}
        {inputIsValid && <Result inputState={inputState} />}
      </main>
    </>
  );
}

export default App;
