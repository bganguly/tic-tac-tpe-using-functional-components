import Square from "./Square";

const renderARowOfSquares = (row, cols, squares, onClick) => {
  return (
    <div key={row} className="board-row">
      {cols.map( col => {
          return <Square
            key={col}
            value = {squares[col+row]}
            onClick = {() => onClick(col+row)}
          />
      })}
    </div>
  )
};

const renderAllSquares = (squares, onClick) => {
  return [0,3,6].map((row) => {
      return renderARowOfSquares(row, [0,1,2],squares,onClick)
  })
};

const  Board = ({squares, onClick}) => {
  return (
    <div>
      <div className="board-row">
        {renderAllSquares(squares, onClick)}
      </div>
    </div>
  );
}

export default Board

