import React, { useState } from "react";
import './App.css';
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
  ])
  //winning square
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  //losing square
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  return (

  );
}

export default App;
