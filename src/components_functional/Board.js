import Square from "./Square";

const renderSquare = (squares,onClick,i) => {
  return <Square
    value = {squares[i]}
    onClick = {() => onClick(i)}
  />;
}

const  Board = ({squares, onClick}) => {
  return (
    <div>
      <div className="board-row">
        {renderSquare(squares, onClick,0)}
        {renderSquare(squares, onClick,1)}
        {renderSquare(squares, onClick,2)}
      </div>
      <div className="board-row">
        {renderSquare(squares, onClick,3)}
        {renderSquare(squares, onClick,4)}
        {renderSquare(squares, onClick,5)}
      </div>
      <div className="board-row">
        {renderSquare(squares, onClick,6)}
        {renderSquare(squares, onClick,7)}
        {renderSquare(squares, onClick,8)}
      </div>
    </div>
  );
}

export default Board

