export default function UserInput({ inputState, setUserInput }) {
  function handleChange(event, propertyName) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [propertyName]: +event.target.value,
      };
    });
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="initialInvestment">Initial Investment</label>
            <input
              id="initialInvestment"
              type="number"
              value={inputState.initialInvestment}
              required
              onChange={(event) => handleChange(event, "initialInvestment")}
            />
          </p>
          <p>
            <label htmlFor="annualInvestment">Annual Investment</label>
            <input
              id="annualInvestment"
              type="number"
              value={inputState.annualInvestment}
              required
              onChange={(event) => handleChange(event, "annualInvestment")}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expectedReturn">Expected Return</label>
            <input
              id="expectedReturn"
              type="number"
              value={inputState.expectedReturn}
              required
              onChange={(event) => handleChange(event, "expectedReturn")}
            />
          </p>
          <p>
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              type="number"
              value={inputState.duration}
              required
              onChange={(event) => handleChange(event, "duration")}
            />
          </p>
        </div>
      </section>
    </>
  );
}
