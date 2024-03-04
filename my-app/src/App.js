import React, { useState } from "react";
import './App.css';
import Square from "./components/Square"
import square from "./components/Square";

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

    const handleGamePlay = (currentSquare) => {
      if(currentSquare === treasureLocation) {
          board[currentSquare] = "💎"
          setBoard([...board])
          setTimeout(() => {
          alert("Not Me Treasure");
          }, 1000)
      } else if (currentSquare === bombLocation){
          board[currentSquare] = "💣"
          setBoard([...board])
          setTimeout(() => {
              alert("KABOOOM")
          },1000)
      } else {
          board[currentSquare] = "🌳"
          setBoard([...board])
      }
    }

    const playAgain = () => {
      setTreasureLocation(Math.floor(Math.random() * board.length))
        setBombLocation(Math.floor(Math.random() * board.length))

        setBoard([
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
    }

  return (
    <>
        <h1>Treasure Hunt Game</h1>
        <div className="board">
            {board.map((square, index) => {
                return (
                    <Square
                    square={square}
                    key={index}
                    index={index}
                    handleGamePlay={handleGamePlay}
                    />
                )
            })}
            <button onClick={playAgain}>Play Again</button>
        </div>
    </>
  );
}

export default App;
