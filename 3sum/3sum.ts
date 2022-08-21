function binarySearchv2(
  left: number,
  right: number,
  nums: number[],
  target: number
): number {
  if (left > right) {
    return NaN;
  } else if (left == right) {
    if (nums[left] == target) {
      return left;
    } else {
      return NaN;
    }
  } else if (left + 1 == right) {
    if (nums[left] == target) {
      return left;
    } else if (nums[right] == target) {
      return right;
    } else {
      return NaN;
    }
  }

  let md = Math.floor((left + right) / 2);
  if (nums[md] == target) {
    return md;
  } else if (nums[md] < target) {
    left = md + 1;
  } else {
    right = md - 1;
  }

  return binarySearchv2(left, right, nums, target);
}

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

  // console.log(pad, nums);

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

      // console.log("i is ", i, "digit is ", digit, "10^cnt is ", 10 ** cnt);
      let len = sorted[digit].length;
      if (!dedup || !len || sorted[digit][len - 1] != i) {
        sorted[digit].push(i);
      }
    });

    pow10n_1 = pow10n_1 * 10;

    // console.log("sorted is ", sorted);
    sorted.map((v) => {
      // console.log("v is ", v, "n_tmp is ", n_tmp);
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

function threeSum(nums: number[]): number[][] {
  let ret: number[][] = [];
  let retStr: string[] = [];
  // let sorted = radixSortv2(nums, true, false);
  let sorted = nums.sort((a, b) => a - b);
  // console.log("sorted is %j", sorted);

  // let sortedCopy = [...sorted];
  for (let i = 0; i < sorted.length; ++i) {
    let t = 0 - sorted[i];
    // console.log("try %d, rest is %d", sorted[i], t);
    for (let j = i + 1; j < sorted.length; ++j) {
      // if (j == i) {
      //   continue;
      // }
      let tt = t - sorted[j];
      // console.log(" \ttry %d, rest is %d", sorted[j], tt);
      //find tt in the rest
      // let newj = i > j ? j : j - 1;
      // sortedCopy = [...sorted];
      // sortedCopy.splice(i, 1);
      // sortedCopy.splice(newj, 1);

      let index = binarySearchv2(j + 1, sorted.length - 1, sorted, tt);

      // console.log(
      //   " \t\tBinarysearch for %d in %j of %d ~ %d, index %d",
      //   tt,
      //   sorted,
      //   j + 1,
      //   sorted.length - 1,
      //   index
      // );
      if (isNaN(index)) {
        continue;
      }

      let ttt = sorted[index];

      //then append
      let aaa = [sorted[i], sorted[j], ttt];

      // console.log(ret[ret.length - 1], aaa);
      // console.log("\t\t>>> find %j", aaa);

      // filter out dup

      // console.log(retStr);
      let isDup = false;
      let tmpStr = aaa.toString();
      for (let j = 0; j < retStr.length; ++j) {
        if (retStr[j] == tmpStr) {
          // console.log("retStr[%d] is %s, tmpStr %s", j, retStr[j], tmpStr);
          isDup = true;
          break;
        }
      }
      if (!isDup) {
        retStr.push(tmpStr);
        ret.push(aaa);
        // console.log(ret);
      }
    }
  }

  return ret;
}

// const nums = [-1, 0, 1, 2, -1, -4];
const nums = [-1, 0, 1, 2, -1, -1, 0, 0, 1, 1, 4, 1, 1, -4];

console.log(threeSum(nums));
