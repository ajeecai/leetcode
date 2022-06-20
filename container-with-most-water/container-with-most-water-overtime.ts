const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function radixSortWithIndex(nums: number[]) {
  // make them into positive
  //   console.log("nums passed is ", nums);
  let pad = 0;
  nums.forEach((e) => {
    if (e < pad) {
      pad = e;
    }
  });

  if (pad < 0) {
    nums = nums.map((e) => e - pad);
  }

  // console.log(pad,nums)

  // get max digit numbers
  let max_cnt = 0;
  nums.forEach((e) => {
    let j = 1;
    while (10 ** j <= e) {
      j++;
    }
    // console.log (e,j)
    if (j > max_cnt) {
      max_cnt = j;
    }
  });
  // console.log('max_cnt is ' , max_cnt);

  let cnt = 0;
  let prefix = 10 ** (max_cnt + 1); // one more 0 for pretty print
  nums = nums.map((v, i) => v + prefix * i);

  //   console.log(
  //     "after padding and prefix,  max digit num is ",
  //     max_cnt,
  //     ",nums is ",
  //     nums
  //   );
  while (1) {
    let n_tmp: number[] = [];
    let sorted = Array.from(new Array(10), (): number[] => []);
    cnt++;
    // console.log("===== cnt is %d =====", cnt);

    let pow_10_cnt = 10 ** cnt;
    let pow_10_cnt_1 = 10 ** (cnt - 1);
    for (let i = 0; i < nums.length; ++i) {
      let digit = nums[i] % pow_10_cnt;
      if (cnt > 1) {
        digit = digit - (nums[i] % pow_10_cnt_1);
        digit = digit / pow_10_cnt_1;
      }
      //   console.log("i is ", i, "digit is ", digit, "10^cnt is ", pow_10_cnt);
      sorted[digit].push(nums[i]);
    }

    // console.log('sorted is ', sorted)
    sorted.map((v) => {
      // console.log('v is ', v, 'n_tmp is ',n_tmp);
      n_tmp = n_tmp.concat(v);
    });

    nums = n_tmp;
    if (cnt >= max_cnt) {
      break;
    }
  }

  let index: number[] = [];

  //   console.log("after transform nums is ", nums, ", now restore the numbers");
  nums = nums.map((e) => {
    const i = Math.floor(e / prefix);
    // console.log("index is ", i);
    index.push(i);
    return (e % prefix) + pad;
  });

  console.log("sorted  ", nums, ",index ", index);
  return [nums, index];
}
function maxArea0(height: number[]): number {
  let sz = 0;
  let sz_tmp = 0;
  let length = height.length;
  const [sorted, index] = radixSortWithIndex(height);

  // timeout version

  for (let i = 0; i < length; ++i) {
    let lastj = 0;
    let span = 0;
    // looking for the rest whose index is the biggest
    for (let j = i + 1; j < length; j++) {
      let tmp_span = index[j] - index[i];
      if (tmp_span < 0) {
        tmp_span = -tmp_span;
      }
      if (tmp_span > span) {
        span = tmp_span;
        lastj = j;
      }
    }

    sz_tmp = sorted[i] * span;
    if (sz_tmp > sz) {
      console.log(
        "current @",
        index[i],
        ", current val is ",
        sorted[i],
        ",to ",
        index[lastj],
        ", span is ",
        span
      );
      sz = sz_tmp;
    }
  }
  return sz;
}

console.log("nums ", height);
console.log(maxArea0(height), ",expected is 49");
