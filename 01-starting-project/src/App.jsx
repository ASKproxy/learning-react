import { useState, Fragment } from "react";

import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton";

function App() {
  // let tabContent = "click a button";
  const [selectedButton, setSelectedButton] = useState();

  function handleOnClickTabButton(buttonName) {
    setSelectedButton(buttonName);
  }

  let tcontent = <p>Please select a topic</p>;
  if (selectedButton) {
    tcontent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title} </h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((c) => (
              <CoreConcepts key={c.title} {...c} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={selectedButton === "components"}
              onClickProp={() => handleOnClickTabButton("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedButton === "jsx"}
              onClickProp={() => handleOnClickTabButton("jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedButton === "props"}
              onClickProp={() => handleOnClickTabButton("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedButton === "state"}
              onClickProp={() => handleOnClickTabButton("state")}
            >
              State
            </TabButton>
          </menu>
          {tcontent}
        </section>
      </main>
    </>
  );
}

export default App;
