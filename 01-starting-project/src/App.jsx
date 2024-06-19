import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import Examples from "./components/examples";

function App() {
  // let tabContent = "click a button";

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
