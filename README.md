This work refactors the [legacy tic-tac-toe react tutorial](https://legacy.reactjs.org/tutorial/tutorial.html) to use hooks and to complete the improvements suggested in that tutorial.  

Main emphahsis is:  
- refactor to use functional components and demonastrate useState hook
- systematically wrap up all the suggested improvements in the tutorial - see https://reactjs.org/tutorial/tutorial.html#wrapping-up

![Screen Shot 2022-03-03 at 8 40 16 AM](https://user-images.githubusercontent.com/627740/156610041-59b38fba-8868-4b5f-b355-7cd1cbe329c4.png)

### Refactoring to use hooks ###
- ~~split single index.js into separate component files~~  
-- done. see [branch 01](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/01-split-indexjs-into-individual-files)  
- ~~rewrite two class based components to be functional and use hooks~~  
-- done. see [branch 02](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/02-use-functional-components-and-hooks)

### Other improvements - TBD ###
- ~~Rewrite Board to use two loops to make the squares instead of hardcoding them.~~  
-- done- see [branch 03](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/03-removed-hard-coded-repitition-in-boardjs)  
- ~~Rewrite based on update tutorial as of 5/2/23, refactor the args and params, simplify some variables and add back the de-duplication of sqaures rendering code~~  
-- done. see [branch 04](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/04-refactored-certain-props-and-variables)  
- ~~For the current move only, show “You are at move #…” instead of a button.~~  
-- done- see [branch 05](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/05-show-text-instead-of-button-for-current-move)  
- ~~Add a toggle button that lets you sort the moves in either ascending or descending order.~~  
-- done- see [branch 06](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/06-allow-moves-to-be-sorted)  
- When someone wins, highlight the three squares that caused the win.
- When no one wins, display a message about the result being a draw.  
- Display the location for each move in the format (col, row) in the move history list.  
