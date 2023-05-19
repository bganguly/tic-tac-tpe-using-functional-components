This work refactors the [legacy tic-tac-toe react tutorial](https://legacy.reactjs.org/tutorial/tutorial.html) to use hooks and to further complete the improvements suggested in the current tutorial [current react tutorial - 5/2/23](https://react.dev/learn/tutorial-tic-tac-toe#wrapping-up).  

Run simply as:
```
git clone
cd to folder
npm i
npm start
```

Main emphahsis is:  
- refactor to use functional components and demonastrate hooks
- systematically wrap up all the suggested improvements in the tutorial - see https://reactjs.org/tutorial/tutorial.html#wrapping-up

![Screen Shot 2023-05-18 at 10 59 11 PM](https://github.com/bganguly/tic-tac-toe-using-functional-components/assets/627740/576e9a00-c137-4b0a-bf42-2acf8fe9665c)

### Refactoring to use hooks ###
- ~~split single index.js into separate component files~~  
-- done. see [branch 01](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/01-split-indexjs-into-individual-files)  
- ~~rewrite two class based components to be functional and use hooks~~  
-- done. see [branch 02](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/02-use-functional-components-and-hooks)

### Other improvements done ###
- ~~Rewrite Board to use two loops to make the squares instead of hardcoding them.~~  
-- done- see [branch 03](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/03-removed-hard-coded-repitition-in-boardjs)  
- ~~Rewrite based on updated tutorial as of 5/2/23, refactor the args and params, simplify some variables and add back the de-duplication of sqaures rendering code~~  
-- done. see [branch 04](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/04-refactored-certain-props-and-variables)  
- ~~For the current move only, show “You are at move #…” instead of a button.~~  
-- done- (this branch)
- ~~Add a toggle button that lets you sort the moves in either ascending or descending order.~~  
-- done- see [branch 06](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/06-allow-moves-to-be-sorted)  
- ~~When someone wins, highlight the three squares that caused the win.~~
- ~~When no one wins, display a message about the result being a draw.~~  
-- done - see [branch 07](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/07-highlight-winning-squares) 
- ~~Display the location for each move in the format (row, col) in the move history list.~~  
-- done - see [branch 08](https://github.com/bganguly/tic-tac-toe-using-functional-components/tree/08-show-col-row-of-each-move)
