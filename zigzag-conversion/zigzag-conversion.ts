const zstr = "PAYPALISHIRING";
const nRows = 4;
// const zstr = "ABCDE";
// const nRows = 4;

function convert(s: string, numRows: number): string {
  if (numRows == 1) {
    return s;
  }
  // calulate the numCol
  const len = s.length;
  // z < numRows
  let z = 0;
  let m = 2 * (numRows - 1);
  while (z < numRows) {
    if ((len - z) % m == 0) {
      console.log("z is ", z);
      break;
    }
    z++;
  }
  let numCol = Math.ceil((len - z) / (2 * (numRows - 1)));
  // maximum column number
  numCol = numCol + (numRows - 2) * numCol + 1;
  console.log("numCol is ", numCol);

  // now do the convert
  let k = 0;
  let col = 0;
  let row = 0;
  let sparsed = false;
  let zigMatrix = Array.from(Array(numRows), () => Array<string>(numCol));
  for (col = 0; col < numCol; ++col) {
    if (!sparsed) {
      for (row = 0; row < numRows; ++row) {
        // console.log("#1 row %d, col %d", row, col);
        zigMatrix[row][col] = s[k++];
      }
    } else {
      // console.log("#2 row %d, col %d", row, col);
      zigMatrix[row][col] = s[k++];
      row--;
    }

    if (row == numRows && row > 2) {
      sparsed = true;
      row -= 2;
    } else if (row == 0) {
      sparsed = false;
    }
  }

  // console.log(zigMatrix);
  // now print out
  let str = "";
  for (row = 0; row < numRows; row++) {
    for (col = 0; col < numCol; col++) {
      if (zigMatrix[row][col]) {
        str += zigMatrix[row][col];
      }
    }
  }
  return str;
}

// console.log(convert(zstr, nRows), "expect: PINALSIGYAHRPI");
