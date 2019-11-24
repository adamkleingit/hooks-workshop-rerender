import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(1);
  console.log("should only render when count changes", count);
  return (
    <div>
      <button onClick={() => setCount(1)}>Open console and click me</button>
      <br />
      <button onClick={() => setCount(2)}>
        Open console and click me 3 times
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
