import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <ClassContainer value={value} />
        <HookContainer value={value} />
        <Notification />
        <PlanetInfo id={value} />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>;
  }
};

const usePlanetInfo = (id) => {
  const [planet, changePlanet] = useState(id);
  console.log(id);
  useEffect(() => {
    let cancelled = false;
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => !cancelled && changePlanet(data.name));
    return () => (cancelled = true);
  }, [id]);

  return planet;
};

const PlanetInfo = ({ id }) => {
  const name = usePlanetInfo(id);
  return (
    <div>
      {id} - {name}
    </div>
  );
};

const HookContainer = ({ value }) => {
  // useEffect(() => console.log("mount"), []);
  // useEffect(() => console.log("update"));
  // useEffect(() => console.log("unmount"), []);

  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  }, []);

  useEffect(() => console.log("update"));

  return <p>{value}</p>;
};

const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return <div>{visible && <p>Hello</p>}</div>;
};

class ClassContainer extends Component {
  componentDidMount() {
    console.log("class: mount");
  }
  componentDidUpdate(props) {
    console.log("class: update");
  }
  componentWillUnmount() {
    console.log("class: unmount");
  }

  render() {
    return <p>{this.props.value}</p>;
  }
}

root.render(<App />);
