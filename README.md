## Setup
Install node and npm if you haven't already.  It is recommended that you
use a node version manager to do so.  The following two lines should install
the current version of node, but there are several install guides if you prefer more information:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install node
```

### If you cloned this repo, you can skip the rest of the setup section.

</br>

Create a project and initialize node:</br>
```
mkdir tdd-node && cd tdd-node
npm init
npm i --savedev @types/node
npm i --savedev jest
```

Update package.json (the "test" line in "scripts") to read:
```
scripts": {
    "test": "node index.test.js"
},
```

## TDD Workflow
Test Driven Development (TDD) is much more a design technique than a way to ensure test coverage.  TDD can be summarized as "Red, Green, Refactor".
- Red - write a test that will force you to write some code to make it pass.  You should actually run the test, and make sure you get a failure (red) result before continuing.
- Green - write the simplest code you can to make the test pass, and don't add any code that doesn't help the test pass.  Naive implementations are best for this step - it's better to write bad code quickly than try to write perfect code, because the key step is...
- REFACTOR - this is what ties TDD together.  It is much, MUCH easier to refactor existing code than to get it right the first time.  Refactor your code, and refactor your tests before continuing.

## TDD Problem Statement
For today's exercise, let's test-drive "Conway's Game of Life".  It's a simple cellular automata algorithm that can lead to some interesting complexity.  

The "game" evolves entirely based on initial state.  It takes place on an infinite two-dimensional grid of cells, where each cell can be either "alive" or "dead".  Cells can be horizontally, vertically or diagonally adjacent.

The algorithm is defined by the following four rules:
1. Any live cell with fewer than two live neighbors dies (as if by underpopulation)
2. Any live cell with two or three live neighbors lives on to the next generation
3. Any live cell with more than three live neighbors dies, as if by overpopulation
4. Any dead cell with exactly three live neighbors becomes a live cell (as if by reproduction)

## Example 
(where "X" represents a live cell and "-" a dead one):
<table>
<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>-</td><td>X</td><td>X</td><td>X</td><td>-</td></tr>
<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
</table>
After one iteration will become:
<table class="tg">
<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>-</td><td>-</td><td>X</td><td>-</td><td>-</td></tr>
<tr><td>-</td><td>-</td><td>X</td><td>-</td><td>-</td></tr>
<tr><td>-</td><td>-</td><td>X</td><td>-</td><td>-</td></tr>
<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
</table>
And then back to...
<table class="tg">
<table class="tg">
<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>-</td><td>X</td><td>X</td><td>X</td><td>-</td></tr>
<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
</table>
</table>

For more information, see [the wikipedia article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) on this subject.