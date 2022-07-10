// const nums = [
//   0, 1, 1, 3, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10,
//   10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
// ];
// const target = 9;
// const nums = [2, 2];
// const target = 2;
// const nums = [1, 1, 1, 1, 2, 2, 2, 3];
// const target = 2;
const nums = [1, 2, 2];
const target = 1;

let lmost = 0;
let rmost = 0;

function searchBinary(
  nums: number[],
  left: number,
  right: number,
  target: number,
  leftSide?: boolean
): number {
  if (left == right) {
    if (nums[left] == target) {
      return left;
    } else {
      console.log("reach end, return -1, left %d, right %d", left, right);
      if (leftSide != undefined) {
        if (leftSide) {
          // handling boundary :), one side must equal to target while the other side not
          lmost = nums[left] == target ? left : left + 1;
        } else {
          rmost = nums[right] == target ? right : right - 1;
        }
      }

      return -1;
    }
  }

  let md = Math.floor((left + right) / 2);
  console.log("md is %d", md);

  if (nums[md] == target) {
    console.log("exact equal to %d", target);
    return md;
  } else if (nums[md] < target) {
    left = md + 1 < right ? md + 1 : right;
    lmost = md;
    console.log("md is %d, lmost is ", md, lmost);
  } else {
    right = md - 1 > left ? md - 1 : left;
    rmost = md;
    console.log("md is %d, rmost is ", md, rmost);
  }
  console.log("recursive call with left %d, right is %d", left, right);
  return searchBinary(nums, left, right, target, leftSide);
}

function searchRange(nums: number[], target: number): number[] {
  rmost = nums.length - 1;
  let index = -1;
  if ((index = searchBinary(nums, 0, nums.length - 1, target)) == -1) {
    console.log("return -1");
    return [-1, -1];
  }
  console.log(
    "one of target index is %d, lmost %d, rmost %d",
    index,
    lmost,
    rmost
  );
  let index2 = index;
  while (
    index - 1 >= 0 &&
    (index = searchBinary(nums, lmost, index - 1, target, true)) != -1
  ) {}

  console.log("lmost is %d", lmost);
  while (
    index2 + 1 < nums.length &&
    (index2 = searchBinary(nums, index2 + 1, rmost, target, false)) != -1
  ) {}

  console.log("lmost %d, rmost %d", lmost, rmost);
  return [lmost, rmost];
}

console.log(searchRange(nums, target));
