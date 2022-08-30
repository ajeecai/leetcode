function rotate(matrix: number[][]): void {
  const n = matrix[0].length;
  let edge = n;
  for (let i = 0; i < edge; ++i, --edge) {
    // console.log("*** i %d, len %d", i, edge);
    for (let j = i; j < n - 1 - i; ++j) {
      // Pay attention to the handling order: left, bottom, right, top
      // j < n - 1 -i  because the last one (top node) has been moved
      // console.log("=== i %d, j %d, n %d", i, j, n);
      const v_ij = matrix[i][j];
      // Left edge: n-1-j, i -> i, j
      // console.log("left edge:\t [%d, %d] -> [%d, %d]", n - 1 - j, i, i, j);
      matrix[i][j] = matrix[n - 1 - j][i];
      // Bottom edge: n-1-i, n-1-j -> n-1-j,i
      // console.log(
      //     "Bottom edge:\t [%d, %d] -> [%d, %d]",
      //     n - 1 - i,
      //     n - 1 - j,
      //     n - 1 - j,
      //     i
      //   );
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      // Right edge: j, n-1-i -> n-1-i,n-1-j
      // console.log(
      //     "Right edge:\t [%d, %d] -> [%d, %d]",
      //     j,
      //     n - 1 - i,
      //     n - 1 - i,
      //     n - 1 - j
      //   );
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      // Top edge, i, j -> j, n-1-i
      // console.log("top edge:\t [%d, %d] -> [%d, %d]", i, j, j, n - 1 - i);
      matrix[j][n - 1 - i] = v_ij;
      // console.log(matrix);
    }
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const matrix = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];
rotate(matrix);
console.log(matrix);
