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

> The Effect Hook lets you perform side effects in function components

```javascript
import React, { Component, useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(1);

  
  return (
     <div>
       <button onClick={() => setValue((v) => v + 1)}>+</button>
       <HookContainer value={value} />
     </div>
    );
 }
  
  const HookContainer = ({ value }) => {
  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  }, []);

  useEffect(() => console.log("update"));

  return <p>{value}</p>;
};
```
- `useCallback`

> Hook that lets you cache a function definition between re-renders

```javascript
const cachedFn = useCallback(fn, dependencies)
```

- `useMemo`

> Hook that lets you cache the result of a calculation between re-renders.

```javascript
const cachedValue = useMemo(calculateValue, dependencies)
```
