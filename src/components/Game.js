import React from 'react';
import Board from "./Board";
import { useState } from 'react';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [ascOrder, setAscOrder] = useState(true);

  const handlePlay = nextSquares => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = nextMove => {
    setCurrentMove(nextMove);
  }

  const returnTextOrButton = (move, description) => {
    return move === currentMove 
    ? <span>{description}</span>
    : <button onClick={() => jumpTo(move)}>{description}</button>
  }

  const getRowColOfMove = (squares, move) =>  {
    if (move > 0) {
      for (let i=0; i< squares.length; i++) {
        let row = Math.floor(i / 3);
        let col = i - 3 * row;
        if (history[move][i] !== history[move -1][i]) {
          return [row, col];
        }
      }
    }
    return [0,0];
  }

  const setMoveText = (move, row, col) => {
    const rolwColSuffix = ` ( row: ${row} , col: ${col} )`;
    return move === 0 
      ? 'Go to game start'
      : move === currentMove 
        ?  'You are at move #' + move + rolwColSuffix
        :  'Go to move #' + move + rolwColSuffix;
  }

  const moves = history.map((squares, move) => {
    const [row, col] = getRowColOfMove(squares, move);
    return (
      <li key={move}>
        {returnTextOrButton(move, setMoveText(move, row, col))}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{ascOrder ? moves: moves.reverse()}</ol>
      </div>
      {currentMove > 0 &&
        <div className="game-info">
          <div className='center-vertically'>
            <button onClick={() => setAscOrder(!ascOrder)}>sort moves</button>
          </div>
        </div>
      }

    </div>
  );
}

export default Game