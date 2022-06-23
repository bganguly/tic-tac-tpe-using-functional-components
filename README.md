This work refactors the [tic-tac-toe react tutorial](https://reactjs.org/tutorial/tutorial.html) to use hooks and to complete the improvements suggested.  
Main emphahsis is:  
- refactor to use functional components and demonastrate useState hook
- systematically wrap up all the TBDs in the original tutorial

### Refactoring to use hooks ###
- ~~split single index.js into separate component files~~ - done. see [brannch 01](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/01-split-indexjs-into-individual-files)  
- ~~rewrite two class based components to be functional and use hooks~~ - done. see [branch 02](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/02-use-functional-components-and-hooks)

### improvements - TBD ###
- Display the location for each move in the format (col, row) in the move history list.
- Bold the currently selected item in the move list.
- ~~Rewrite Board to use two loops to make the squares instead of hardcoding them.~~  
-- done- see [branch 03](https://github.com/bganguly/tic-tac-toe-using-functional-components/blob/03-removed-hard-coded-repitition-in-boardjs/src/components_functional/Board.js)
- Add a toggle button that lets you sort the moves in either ascending or descending order.
- When someone wins, highlight the three squares that caused the win.
- When no one wins, display a message about the result being a draw.
