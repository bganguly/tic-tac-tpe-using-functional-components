import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";

const renderARowOfSquares = (row, cols, squares, handleClick) => {
  return (
    <div key={row} className="board-row">
      {cols.map( col => {
          return <Square
            key={col}
            value = {squares[col+row]}
            onSquareClick = {() => handleClick(col+row)}
          />
      })}
    </div>
  )
};

const renderAllSquares = (squares, handleClick) => {
  return [0,3,6].map((row) => {
      return renderARowOfSquares(row, [0,1,2], squares, handleClick)
  })
};

const setStatus = (winner, xIsNext) => winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');

const Board = ({ xIsNext, squares, onPlay }) => {

  const handleClick = i => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  return (
    <>
      <div className="status">{setStatus(winner, xIsNext)}</div>
      <div className="board-row">
        {renderAllSquares(squares, handleClick)}
      </div>
    </>
  );
}

export default Board
