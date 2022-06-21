import Square from "./Square_wip";

const renderSquare = (i,squares,onClick) => {
  return <Square
    value = {squares[i]}
    onClick = {() => onClick(i)}
  />;
}

const  Board = () => {
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board

