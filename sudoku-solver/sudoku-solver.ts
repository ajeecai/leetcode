// const board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

const board = [
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."],
];

function isKnownNumber(node: number[]): boolean {
  return node.length == 2;
}
function boxCheck(
  m: number,
  n: number,
  val: number,
  stateMatrix: number[][][]
): boolean {
  let rbNr = Math.floor(m / 3) * 3;
  let cbNr = Math.floor(n / 3) * 3;
  for (let i = rbNr; i < rbNr + 3; ++i) {
    for (let j = cbNr; j < cbNr + 3; ++j) {
      if (m == i && n == j) {
        continue;
      }
      let tmpIndex = stateMatrix[i][j][0];
      let tmpVal = stateMatrix[i][j][tmpIndex];
      if (tmpVal === val) {
        console.log(
          "\t box check tmpVal %d same as board[%d, %d] %s",
          tmpVal,
          i,
          j,
          board[i][j]
        );
        //   console.log("%j", board);
        return false;
      }
    }
  }
  return true;
}
function rowCheck(
  m: number,
  n: number,
  val: number,
  nrs: number,
  stateMatrix: number[][][]
): boolean {
  for (let i = 0; i < nrs; ++i) {
    if (n == i) {
      continue;
    }
    let tmpIndex = stateMatrix[m][i][0];
    let tmpVal = stateMatrix[m][i][tmpIndex];
    if (tmpVal === val) {
      console.log(
        "\t row check tmpVal %d same as board[%d, %d] %s",
        tmpVal,
        m,
        i,
        board[m][i]
      );
      return false;
    }
  }
  return true;
}
function colCheck(
  m: number,
  n: number,
  val: number,
  nrs: number,
  stateMatrix: number[][][]
): boolean {
  for (let i = 0; i < nrs; ++i) {
    if (m == i) {
      continue;
    }
    let tmpIndex = stateMatrix[i][n][0];
    let tmpVal = stateMatrix[i][n][tmpIndex];
    if (tmpVal === val) {
      console.log(
        "\t col check,tmpVal %d same as board[%d,%d] %s",
        tmpVal,
        i,
        n,
        board[i][n]
      );
      return false;
    }
  }
  return true;
}
function nextOne(
  m: number,
  n: number,
  nrs: number,
  board: string[][],
  stateMatrix: number[][][]
): boolean {
  let ret = true;
  let val = 0;

  console.log(stateMatrix[m][n]);

  while (1) {
    ret = true; //reset for each loop

    console.log("[%d, %d] %s", m, n, board[m][n]);
    if (isKnownNumber(stateMatrix[m][n])) {
      console.log("this is a number");
    }
    stateMatrix[m][n][0] += 1;
    let index = stateMatrix[m][n][0];
    if (index == stateMatrix[m][n].length) {
      console.log("\t this node %j reach end, false", stateMatrix[m][n]);
      // BackTracking, and reset this slot
      board[m][n] = ".";
      stateMatrix[m][n][0] = 0;
      console.log("\t BackTracking from [%d, %d] to previous", m, n);
      return false;
    }
    val = stateMatrix[m][n][index];
    // box check
    if (boxCheck(m, n, val, stateMatrix) == false) {
      continue;
    }

    //check row
    if (rowCheck(m, n, val, nrs, stateMatrix) == false) {
      continue;
    }
    //check col
    if (colCheck(m, n, val, nrs, stateMatrix) == false) {
      continue;
    }

    // OK to proceed to next step
    console.log("\t set to %d with %j", val, stateMatrix[m][n]);
    board[m][n] = val.toString();

    // go left for next column until boundary, then go down for next row
    if (n + 1 < nrs) {
      console.log("\t OK1, go to nextOne [%d, %d]", m, n + 1);
      ret = nextOne(m, n + 1, nrs, board, stateMatrix);
    } else if (m + 1 < nrs) {
      console.log("\t OK2, go to nextOne [%d, %d]", m + 1, n);
      ret = nextOne(m + 1, 0, nrs, board, stateMatrix);
    }

    // if the recursive call return sucessfully, means the job is done.
    // Otherwise, loop back to try starting from another candicate number of this slot
    if (ret == false) {
      continue;
    } else {
      if (m == nrs - 1 && n == nrs - 1) {
        console.log("congratulations, well done");
        return true;
      }

      return true;
    }
  } // while

  return ret;
}

/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const nrs = board[0].length;
  const blockNr = nrs / 3;

  /*********** prepare data ***************/
  // three dimention array, the index#0 at third dimention work as cursor
  let stateMatrix = Array.from(Array(nrs), () =>
    Array.from(Array(nrs), () => Array.from(Array(10).keys()))
  );

  let knownNumBlock = Array.from(Array(blockNr), () =>
    Array.from(Array(blockNr), (): number[] => [])
  );

  let knownNumRow = Array.from(Array(nrs), (): number[] => []);
  let knownNumCol = Array.from(Array(nrs), (): number[] => []);

  //   console.log(stateMatrix);
  for (let i = 0; i < nrs; ++i) {
    for (let j = 0; j < nrs; ++j) {
      let num = Number(board[i][j]);
      if (!isNaN(num)) {
        // console.log("num is %d", num);
        knownNumBlock[Math.floor(i / 3)][Math.floor(j / 3)].push(num);
        knownNumRow[i].push(num);
        knownNumCol[j].push(num);

        stateMatrix[i][j][1] = num;
        stateMatrix[i][j].splice(2);
      }
    }
  }
  //   console.log("after adjust, the stateMatrix is ", stateMatrix);
  // now try the constraints
  //   console.log(knownNum);
  // 1. box check
  for (let i = 0; i < nrs; ++i) {
    for (let j = 0; j < nrs; ++j) {
      if (!isKnownNumber(stateMatrix[i][j])) {
        // console.log("stateMatrix[%d][%d] ", i, j, stateMatrix[i][j]);

        knownNumBlock[Math.floor(i / 3)][Math.floor(j / 3)].forEach((v) => {
          //   console.log("known v %d", v);
          let index = stateMatrix[i][j].indexOf(v);
          if (index != -1) {
            stateMatrix[i][j].splice(index, 1);
            // console.log(
            //   "after processing, stateMatrix[%d][%d] ",
            //   i,
            //   j,
            //   stateMatrix[i][j]
            // );
          }
        });
        // this is known number slot
      }
    }
    // 2. row and col excluded
    for (let i = 0; i < nrs; ++i) {
      for (let j = 0; j < nrs; ++j) {
        if (!isKnownNumber(stateMatrix[i][j])) {
          // remove row duplicate
          knownNumRow[i].forEach((v) => {
            let index = stateMatrix[i][j].indexOf(v);
            if (index != -1) {
              //   console.log("%d, %d, remove row %d", i, j, v);
              stateMatrix[i][j].splice(index, 1);
            }
          });
          // remove col duplicate
          knownNumCol[j].forEach((v) => {
            let index = stateMatrix[i][j].indexOf(v);
            if (index != -1) {
              //   console.log("%d, %d, col row %d", i, j, v);
              stateMatrix[i][j].splice(index, 1);
            }
          });
        }
      }
    }
  }
  //   console.log(
  //     "after box filter and row col filter, stateMatrix is ",
  //     stateMatrix
  //   );

  /*********** prepare data done ***************/

  // Just do it
  nextOne(0, 0, nrs, board, stateMatrix);
}

console.log(solveSudoku(board));
console.log("%j", board);
