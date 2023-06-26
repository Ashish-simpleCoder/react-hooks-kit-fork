import { useState } from "react";
import "./App.css";
import Fetch from "./hooks/useFetch/Demo";
import Copy from "./hooks/useCopyToClipboard/Demo";

function App() {
  const [state, setState] = useState("copy");

  return (
    <div>
      <p>Custom hook</p>
      <button onClick={() => setState("fetch")}>useFetch</button>
      <button onClick={() => setState("copy")}>useCopyToClipboard</button>

      {state === "fetch" && <Fetch />}
      {state === "copy to clipboard" && <Copy />}
    </div>
  );
}

export default App;
