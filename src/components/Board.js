import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";

const getClassName = (row,col, winner) => 
  winner && [winner[1], winner[2], winner[3]].includes( row + col )
  ? 'square square-winning'
  : 'square' ;

const renderARowOfSquares = (row, cols, squares, handleClick, winner) => {
  return (
    <div key={row} className="board-row">
      {cols.map( col => {
          return <Square
            key={col}
            value = {squares[col+row]}
            className = {getClassName(row, col, winner)}
            onSquareClick = {() => handleClick(col+row)}
          />
      })}
    </div>
  )
};

const renderAllSquares = (squares, handleClick, winner) => {
  return [0,3,6].map((row) => {
      return renderARowOfSquares(row, [0,1,2], squares, handleClick, winner)
  })
};

const setStatus = (winner, xIsNext, allMovesCompleted) => 
  winner 
  ? 'Winner: ' + winner[0] 
  : (allMovesCompleted 
      ? 'Winner : None'
      : 'Next player: ' + (xIsNext ? 'X' : 'O')
    );

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
  const allMovesCompleted = squares.filter(square => square === null).length === 0;

  return (
    <>
      <div className="status">{setStatus(winner, xIsNext, allMovesCompleted)}</div>
      <div className="board-row">
        {renderAllSquares(squares, handleClick, winner)}
      </div>
    </>
  );
}

export default Board
