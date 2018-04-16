const grid = [];

// build out the empty grid
function generateGrid() {
  let count = 0;
  while (count < 10) {
    grid.push(new Array(10));
    count++;
  }
}

// initialize a ship
function initializeShip(letter, counter) {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);

  // place the ship if the cell is available
  if (!grid[x][y]) {
    grid[x][y] = letter;
    counter--;
  } else {
    initializeShip(letter, counter); // already in use, try again
    return;
  }

  // recursively call if ships remaining
  if (counter > 0) {
    initializeShip(letter, counter); // add another ship
  }
}

// render the grid
function renderGrid() {
  for (let row of grid) {
    let outputRow = "";
    for (let element of row) {
      if (element) {
        outputRow += " " + element;
      } else {
        outputRow += " .";
      }
    }
    console.log(outputRow);
  }
}

// generate the grid
generateGrid();

initializeShip("T", 2); // tugs
initializeShip("D", 3); // destroyers
initializeShip("S", 3); // submarines
initializeShip("B", 4); // battleships
initializeShip("C", 5); // cruisers

// render the grid
renderGrid();