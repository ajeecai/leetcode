function radixSortDup(nums: number[]): number[] {
  // make them into positive
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
  while (1) {
    let n_tmp: number[] = [];
    let sorted = Array.from(new Array(10), (): number[] => []);
    cnt++;
    // console.log('===== cnt is %d =====', cnt)
    nums.forEach((i) => {
      let digit = i % 10 ** cnt;
      if (cnt > 1) {
        digit = digit - (i % 10 ** (cnt - 1));
        digit = digit / 10 ** (cnt - 1);
      }
      // console.log('i is ', i, 'digit is ', digit, '10^cnt is ', 10**cnt);
      sorted[digit].push(i);
    });
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

  if (pad < 0) {
    nums = nums.map((e) => e + pad);
  }
  // console.log('n_tmp ', nums);
  return nums;
}
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let nums = nums1.concat(nums2);
  // console.log('unsorted nums ', nums);
  nums = radixSort(nums);
  // console.log('sorted nums ', nums);
  const len = nums.length;
  if (len % 2) {
    // console.log('md is', Math.floor(nums.length/2), 'len ', len, ' len%2', len%2)
    return nums[Math.floor(nums.length / 2)];
  } else {
    const n1 = Math.floor(nums.length / 2);
    const n2 = n1 - 1;
    // console.log('md is', Math.floor(nums.length/2), 'len ', len, ' len%2', len%2, 'n1 ', n1, ',n2', n2)
    return (nums[n1] + nums[n2]) / 2;
  }
}
