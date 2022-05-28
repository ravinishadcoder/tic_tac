import React, { useState, useEffect } from "react";
import SquareComponent from "./SquareComponent";
import { Button, ButtonGroup,Container } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  
  PopoverArrow,
  PopoverCloseButton,
  
} from "@chakra-ui/react";
const initialState = ["", "", "", "", "", "", "", "", "", ""];
function App() {
  const [gameState, updateGameState] = useState(initialState);
  const [isXchance, updateIsXchance] = useState(false);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXchance ? "X" : "0";
    updateGameState(strings);
    updateIsXchance(!isXchance);
  };
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setTimeout(() => {
        alert(`yaaa! ${winner} has won the Game!`);
        updateGameState(initialState);
      }, 100);
    }
  }, [gameState]);
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };
  return (
    <div className="app-header">
      
      <p className="heading-text">Tic-Tac-Toe</p>
      <div>
      <div className="row jc-center">
        <SquareComponent
          state={gameState[0]}
          onClick={() => onSquareClicked(0)}
        />
        <SquareComponent
          state={gameState[1]}
          onClick={() => onSquareClicked(1)}
        />
        <SquareComponent
          className="b-bottom"
          state={gameState[2]}
          onClick={() => onSquareClicked(2)}
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          state={gameState[3]}
          onClick={() => onSquareClicked(3)}
        />
        <SquareComponent
          state={gameState[4]}
          onClick={() => onSquareClicked(4)}
        />
        <SquareComponent
          state={gameState[5]}
          onClick={() => onSquareClicked(5)}
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          state={gameState[6]}
          onClick={() => onSquareClicked(6)}
        />
        <SquareComponent
          state={gameState[7]}
          onClick={() => onSquareClicked(7)}
        />
        <SquareComponent
          state={gameState[8]}
          onClick={() => onSquareClicked(8)}
        />
      </div>
      </div>
      <Button
        className="clear-button "
        colorScheme="red"
        onClick={() => updateGameState(initialState)}
      >
        Clear Game
      </Button>
      <Popover>
        <PopoverTrigger>
          <Button colorScheme="green">Creator</Button>
        </PopoverTrigger>
        <PopoverContent color="red">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Thank you for Playing !</PopoverHeader>
          <PopoverBody>Creator Ravi Nishad</PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default App;
