import TabButton from "./TabButton";
import { useState, Fragment } from "react";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

export default function Examples() {
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

  const buttons = (
    <>
      <TabButton
        isSelected={selectedButton === "components"}
        onClick={() => handleOnClickTabButton("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedButton === "jsx"}
        onClick={() => handleOnClickTabButton("jsx")}
      >
        Jsx
      </TabButton>
      <TabButton
        isSelected={selectedButton === "props"}
        onClick={() => handleOnClickTabButton("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedButton === "state"}
        onClick={() => handleOnClickTabButton("state")}
      >
        State
      </TabButton>
    </>
  );

  return (
    <section id="examples">
      <Tabs buttons={buttons} buttonContainer="menu">
        {" "}
        {tcontent}{" "}
      </Tabs>
    </section>
  );
}
