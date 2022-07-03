const nums = [2, 3, 1, 1, 4]; //true
// const nums = [3, 2, 1, 0, 4]; //false

// true or false whether we can go from i to j
function canGoto(i: number, j: number, nums: number[], dp: boolean[][]) {
  if (dp[i][j] != undefined) {
    return dp[i][j];
  }

  // #1: can directly jump from this node
  if (nums[i] >= j - i) {
    dp[i][j] = true;
    return dp[i][j];
  }

  // #2: we have to jump into intermediate nodes, i -> k -> j
  for (let k = i + 1; k < j; k++) {
    if (canGoto(i, k, nums, dp) && canGoto(k, j, nums, dp)) {
      return (dp[i][j] = true);
    }
  }
  // console.log("could not find, return false");

  return (dp[i][j] = false);
}

function canJump(nums: number[]): boolean {
  let dp = Array.from(Array(nums.length), () => Array<boolean>(nums.length));

  const ret = canGoto(0, nums.length - 1, nums, dp);
  // console.log(dp);
  return ret;
}

console.log(canJump(nums));
