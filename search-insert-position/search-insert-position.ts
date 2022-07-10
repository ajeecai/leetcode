function binarySearch(
  left: number,
  right: number,
  nums: number[],
  target: number
): number {
  if (left == right) {
    if (nums[left] == target) {
      return left;
    }

    return nums[left] < target ? left + 1 : left;
  }

  let md = Math.floor((left + right) / 2);
  if (nums[md] == target) {
    return md;
  } else if (nums[md] < target) {
    left = md + 1 > right ? right : md + 1;
  } else {
    right = left < md - 1 ? md - 1 : left;
  }

  return binarySearch(left, right, nums, target);
}

function searchInsert(nums: number[], target: number): number {
  return binarySearch(0, nums.length - 1, nums, target);
}

const nums = [1, 3, 5, 6];
const target = 5;
// const nums = [1, 3, 5, 6];
// const target = 2;
// const nums = [1, 3, 5, 6];
// const target = 2;
// const nums = [1, 3];
// const target = 0;

console.log(searchInsert(nums, target));
