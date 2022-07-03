// const nums = [2, 3, 1, 1, 4];
const nums = [3, 2, 1, 0, 4];

// true or false whether we can go from i to j
function canGoto(i: number, j: number, nums: number[], dp: boolean[][]) {
  const jj = j - i - 1;

  if (jj < dp[i].length && dp[i][jj] != undefined) {
    return dp[i][jj];
  }

  // #1: can directly jump from this node
  if (nums[i] >= j - i) {
    dp[i][jj] = true;
    return dp[i][jj];
  }

  // #2: we have to jump into intermediate nodes, i -> ... -> k -> ... -> j
  for (let k = i + 1; k < j; k++) {
    if (canGoto(i, k, nums, dp) && canGoto(k, j, nums, dp)) {
      const jj = j - i - 1;
      return (dp[i][jj] = true);
    }
  }
  // console.log("could not find, return false");

  return (dp[i][jj] = false);
}

function canJump(nums: number[]): boolean {
  let dp = Array.from(Array(nums.length), (): boolean[] => []);
  // to save memory, only allocate rigt side of diagonal, and shorter length
  let mem = 0;
  for (let i = 0; i < nums.length; ++i) {
    const len = nums[i] < nums.length ? nums[i] : nums.length;
    mem += len;
    dp[i] = Array<boolean>(len);
  }
  console.log("len is ", mem);
  const ret = canGoto(0, nums.length - 1, nums, dp);
  // console.log(dp);
  return ret;
}

console.log(canJump(nums));
