import React, { useContext } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const MyContext = React.createContext();

const App = () => {
  return (
    <MyContext.Provider value="Hello World 123">
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>;
};

root.render(<App/>);
