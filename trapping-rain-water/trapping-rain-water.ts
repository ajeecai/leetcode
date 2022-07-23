const MAX_LEVEL = 5; // 1: non-recursion

function getMaxandSecond(nums: number[]) {
  let maxIndex = 0;
  let sec = -1;
  let secIndex = 0;
  if (nums.length < 2) {
    return [0, 0];
  }

  for (let i = 1; i < nums.length; ++i) {
    if (nums[maxIndex] < nums[i]) {
      secIndex = maxIndex;
      maxIndex = i;
    } else if (nums[i] > sec) {
      sec = nums[i];
      secIndex = i;
    }
  }

  return [maxIndex, secIndex];
}

function getWaterLevel(height: number[], level: number): [number, number[][]] {
  console.log("#%d,getwater from ", level, height);
  if (height.length <= 2) {
    return [0, []];
  }
  if (level == MAX_LEVEL) {
    return [0, [height]];
  }

  let [max, sec] = getMaxandSecond(height);

  let water = 0;
  let start = max;
  let end = sec;

  if (start > end) {
    [start, end] = [end, start];
  }
  let stake = height[start] > height[end] ? height[end] : height[start];

  for (let i = start + 1; i < end; ++i) {
    water += stake - height[i];
  }
  console.log("=== start %d, end %d, water %d", start, end, water);
  let subHeight: number[][] = [];
  // left side of the processed area of original array
  let left = height.slice(0, start + 1);
  let [w, h] = getWaterLevel(left, level + 1);
  water += w;
  subHeight = subHeight.concat(h);
  console.log("<<<<< left side %j, water is %d", left, water);

  // right side of the processed area
  let right = height.slice(end);
  [w, h] = getWaterLevel(right, level + 1);
  water += w;
  subHeight = subHeight.concat(h);
  console.log(">>>>> right side %j, water is %d", right, water);

  return [water, subHeight];
}

function trap(height: number[]): number {
  let subHeight: number[][] = [height];
  let water = 0;
  while (subHeight.length != 0) {
    console.log("subHeight is ", subHeight);
    let [w, h] = getWaterLevel(subHeight[0], 0);
    subHeight.splice(0, 1);
    water += w;
    subHeight = subHeight.concat(h);
  }

  return water;
}
// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height = [4, 2, 3];

console.log("water is ", trap(height));
