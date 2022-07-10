// param start to skip the duplicate combination
// return :
//  -1: this branch path is end, the caller needs to backtracking
//   0: find match, since it is in ascending order, this path is also end, need to backtrack
//   1: after adding, sum is less than target, continue to try next element in the same level
function findSum(
  start: number,
  candidates: number[],
  target: number,
  seqs: number[],
  output: number[][]
): number {
  let n = -1;
  // i scans over the whole candidates
  for (let i = start; i < candidates.length; ++i) {
    console.log("candidates[%d] %d", i, candidates[i]);
    n = candidates[i];
    const rest = target - n;
    if (rest == 0) {
      seqs.push(n);

      output.push([...seqs]);
      console.log("ok for %j", seqs);

      seqs.pop();
      // the input candicates is in ascending order, and unique,
      // so return if matching because the next won't be matching any more
      return 0;
    } else if (rest < 0) {
      console.log("#1 failed for %j", seqs, "+", n, ", reach end");
      return -1;
    } else {
      seqs.push(n);

      if (findSum(start, candidates, rest, seqs, output) <= 0) {
        console.log(
          "\t BackTracking to candicates[%d] %d and continue",
          i + 1,
          candicates[i + 1]
        );
        start = i + 1;
        seqs.pop();
        continue;
      } else {
        console.log(
          "#2 failed for %j",
          seqs,
          "+",
          n,
          ", continue to find match from the same level down"
        );

        seqs.pop();
        return 1;
      }
    }
  }
  return 0;
}
function combinationSum(candidates: number[], target: number): number[][] {
  // #1, sort candicates
  candidates = candidates.sort((a, b) => a - b);
  let seqs: number[] = [];
  let output: number[][] = [];
  // console.log(candicates);

  findSum(0, candidates, target, seqs, output);
  return output;
}

// const candicates = [1, 2, 3, 5, 6];
// const target = 10;
// const candicates = [2, 3, 5];
// const target = 8;
const candicates = [3, 12, 9, 11, 6, 7, 8, 5, 4];
const target = 15;

console.log(combinationSum(candicates, target));
