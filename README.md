# Getting Started with Create React App

This work refactors the [tic-tac-toe react tutorial](https://reactjs.org/tutorial/tutorial.html) to use hooks and complete the improvements suggested.  
Main emphahsis is:  
- refactor to use functional components and demonastrate useState hook
- systematically wrap up all the TBDs in the original tutorial

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

![Screen Shot 2022-03-03 at 8 40 16 AM](https://user-images.githubusercontent.com/627740/156610041-59b38fba-8868-4b5f-b355-7cd1cbe329c4.png)


### improvements - TBD ###
- Display the location for each move in the format (col, row) in the move history list.
- Bold the currently selected item in the move list.
- ~~Rewrite Board to use two loops to make the squares instead of hardcoding them.~~  
-- done- see [linky](https://github.com/bganguly/tic-tac-toe-using-functional-components/blob/03-removed-hard-coded-repitition-in-boardjs/src/components_functional/Board.js)
- Add a toggle button that lets you sort the moves in either ascending or descending order.
- When someone wins, highlight the three squares that caused the win.
- When no one wins, display a message about the result being a draw.
