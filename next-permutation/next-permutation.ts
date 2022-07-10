function findNearestGreaterinDescendingArray(
  nums: number[],
  target: number
): number {
  let p = -1;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > target) {
      p = i;
      continue;
    } else {
      break;
    }
  }
  return p;
}

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let len = nums.length;
  if (len == 1) {
    return;
  }
  if (nums.length == 2) {
    [nums[0], nums[1]] = [nums[1], nums[0]];
    return;
  }

  let i = 0;
  for (i = nums.length - 2; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      // j must not be -1
      const j =
        i + 1 + findNearestGreaterinDescendingArray(nums.slice(i + 1), nums[i]);
      [nums[i], nums[j]] = [nums[j], nums[i]];
      console.log(nums);
      const subNums = nums.slice(i + 1).sort((a, b) => a - b); // TODO: can sort in place?
      const newArray = nums.slice(0, i + 1).concat(subNums);
      // Typescript, has to copy one by one ...
      for (i = 0; i < nums.length; ++i) {
        nums[i] = newArray[i];
      }
      console.log("j %d, sorted subNums %j, nums %j", j, subNums, nums);
      return;
    }
  }

  if (i < 0) {
    console.log("round back");
    nums.sort((a, b) => a - b);
  }
}

const nums = [1, 3, 6, 2, 1];
// const nums = [1, 2, 3];
// const nums = [1, 3, 2, 0];
nextPermutation(nums);

console.log(nums);
