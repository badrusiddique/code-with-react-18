import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const countries = [
    { id: 1, name: "USA" },
    { id: 2, name: "UAE" },
    { id: 3, name: "RUSSIA" },
    { id: 4, name: "AUS" },
    { id: 5, name: "IND" },
  ];

  const handleSelected = (id: number) => {
    console.log("selected country: ", countries.find(x => x.id === id));
  }

  return (
    <div className="App">
      <Message />
      <ListGroup items={countries} title="Countries" onSelected={handleSelected} />
    </div>
  );
}

export default App;
