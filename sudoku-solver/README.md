# sudoku-solver

## Link

https://leetcode.com/problems/sudoku-solver/

## Takeaway

- Super hard, it takes me two days.
- [BackTracking](../zigzag-conversion/README.md) when it could not reach end successfully. Do it recursively similar to what we do in binary search.
- Use constraints to reduce the candidate numbers in each slot.

  constraints 1: knownNumBlock

  constraints 2: knownNumRow and knownNumCol

  stateMatrix: three dimention array, the first two dimentions correspond to sudoku puzzle box, while [1...n] in the third dimention represent candicate numbers under constraints, the index#0 at third dimention work as cursor. An example:
  `console.log(stateMatrix[m][n]);` Output is

  ```
  [3,3,5,6,8,9]
   ^     ^
   |     |
   |    points to 6 currently
   cursor
  ```

faster than 50.48%, not bad :)

When submit, don't forget to comment all of the console.log for speeding up.
