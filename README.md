# Practice with basic React hooks

- `useState`
> Let you use state and other React features without writing a class

```javascript
import React, { useState } from "react";
const HookSwitcher = () => {
  const [color, setColor] = useState("white");
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
    </div>
  );
};
```
- `useContext`
> Allows you to read the context and subscribe to its changes

```javascript
import React, { useContext } from "react"

const Child = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>;
};

const App = () => {
  return (
    <MyContext.Provider value="Hello World 123">
      <Child />
    </MyContext.Provider>
  );
};
```
- `useEffect`
```javascript

```
