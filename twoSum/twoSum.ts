// const nums = [2,7,11,21,15,1333,23,23,1,331]
// const nums = [2,1,3,7,11,15];
// const nums = [2,2,0,1]
// const target = 9
// const nums = [3,3]
// const target = 6
// const nums = [-3,4,3,90]
// const target = 0
const nums = [-1, -2, -3, -4, -5];
const target = -8;

function radixSort(nums: number[]): number[] {
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

function binarySearch(
  nums: number[],
  left: number,
  right: number,
  val: number
): number {
  let md = Math.round((left + right) / 2);
  // console.log('left: ', left, ', right ', right, ', md ',md, 'val at md ', nums[md]);

  if (nums[md] == val) {
    // console.log('find it in order list, md ',md);
    return md;
  } else if (left >= right) {
    // console.log('left ', left, ' right ', right, 'cant find');
    return -1;
  }

  if (nums[md] > val) {
    // console.log('<<<' );
    if (left == right - 1) {
      right = left;
    } else {
      right = md;
    }
  } else {
    // console.log('>>>');
    if (left == right - 1) {
      left = right + 1;
    } else {
      left = md;
    }
  }

  return binarySearch(nums, left, right, val);
}

function twoSum(nums: number[], target: number): number[] {
  let numsCopy = [...nums];

  // radix sort first
  numsCopy = radixSort(numsCopy);

  // now search
  // console.log('nums in order ',numsCopy)
  for (let i = 0; i <= nums.length; i++) {
    let ret = binarySearch(
      numsCopy,
      i + 1,
      numsCopy.length - 1,
      target - numsCopy[i]
    );
    if (ret >= 0) {
      let first = -1;
      let sec = -1;
      // console.log('i ', i, ',ret ', ret, 'nums ', nums, 'nums_Order', numsCopy,'target ', target)
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] == numsCopy[i]) {
          first = j;
        }
      }
      for (let j = 0; j < nums.length; j++) {
        if (j == first) {
          continue;
        }
        if (nums[j] == numsCopy[ret]) {
          sec = j;
        }
      }
      if (first > sec) {
        [first, sec] = [sec, first];
      }
      return [first, sec];
    }
  }

  return [0, 0];
}

// console.log(twoSum(nums,target))
