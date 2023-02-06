import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () => {
  const [color, setColor] = useState("white");
  const [fontSize, setFontSize] = useState(14);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: color,
        fontSize: `${fontSize}px`,
      }}
    >
      Helo World
      <button onClick={() => setColor("grey")}>Grey</button>
      <button onClick={() => setColor("white")}>light</button>
      <button onClick={() => setFontSize((s) => s + 2)}>+</button>
      <button onClick={() => setFontSize((s) => s - 2)}>-</button>
    </div>
  );
};

root.render(<App />);
