function radixSortv2(
  nums: number[],
  hasNegtive: boolean,
  dedup: boolean
): number[] {
  // make them into positive
  let pad = 0;
  if (hasNegtive) {
    nums.forEach((e) => {
      if (e < pad) {
        pad = e;
      }
    });

    if (pad < 0) {
      nums = nums.map((e) => e - pad);
    }
  }

  // console.log(pad,nums)

  let cnt = 0;
  let isEnd = false;

  let pow10n_1 = 1;
  while (!isEnd) {
    let pow10n = pow10n_1 * 10;
    let n_tmp: number[] = [];
    let sorted = Array.from(new Array(10), (): number[] => []);
    cnt++;
    isEnd = true;
    // console.log('===== cnt is %d =====', cnt)
    nums.forEach((i) => {
      if (!hasNegtive && i < 0) {
        return;
      }
      if (isEnd && i >= pow10n) {
        isEnd = false;
      }
      let digit = i % pow10n;
      digit = digit - (i % pow10n_1);
      digit = digit / pow10n_1;

      // console.log('i is ', i, 'digit is ', digit, '10^cnt is ', 10**cnt);
      let len = sorted[digit].length;
      if (!dedup || !len || sorted[digit][len - 1] != i) {
        sorted[digit].push(i);
      }
    });

    pow10n_1 = pow10n_1 * 10;

    // console.log("sorted is ", sorted);
    sorted.map((v) => {
      // console.log('v is ', v, 'n_tmp is ',n_tmp);
      n_tmp = n_tmp.concat(v);
    });

    nums = n_tmp;
  }

  if (pad < 0) {
    nums = nums.map((e) => e + pad);
  }
  // console.log('n_tmp ', nums);
  return nums;
}

function firstMissingPositive(nums: number[]): number {
  nums = radixSortv2(nums, false, true);
  console.log(nums);
  if (nums[0] != 0 && nums[0] != 1) {
    return 1;
  }

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] != nums[i - 1] + 1 && nums[i] != nums[i - 1]) {
      return nums[i - 1] + 1;
    }
  }
  return nums[nums.length - 1] + 1;
}
// const nums = [0, 2, 1, 5, 77, 899, 3, 68, -9, -342, 23];
// console.log(radixSort(nums, false));
const nums = [1, 2, 2, 1, 3, 1, 0, 4, 0];
console.log(firstMissingPositive(nums));
