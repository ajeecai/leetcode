const height1 = [1, 8, 6, 2, 5, 4, 8, 25, 7];

function maxArea(height: number[]): number {
  let sz = 0;
  // first one
  for (let i = 1; i < height.length; ++i) {
    if (height[0] < height[i]) {
      sz = height[0] * i;
    }
  }

  for (let i = 1; i < height.length; ++i) {
    const away = Math.ceil(sz / height[i]);
    // console.log(
    //   "away is ",
    //   away,
    //   ", current i ",
    //   i,
    //   ",current[i] is ",
    //   height[i]
    // );
    // left side j -> current i
    if (i - away >= 0) {
      for (let j = 0; j <= i - away; ++j) {
        if (height[j] < height[i]) {
          continue;
        }
        const sz_tmp = height[i] * (i - j);
        if (sz_tmp > sz) {
          sz = sz_tmp;
          // console.log(
          //   "update: i is ",
          //   i,
          //   "(",
          //   height[i],
          //   ") j is ",
          //   j,
          //   "(",
          //   height[j],
          //   ") sz is ",
          //   sz
          // );
        }
      }
    }
    // current i -> right side j
    if (i + away < height.length) {
      for (let j = i + away; j < height.length; ++j) {
        if (height[j] < height[i]) {
          continue;
        }

        const sz_tmp = height[i] * (j - i);
        if (sz_tmp > sz) {
          sz = sz_tmp;
          // console.log(
          //   "update: i is ",
          //   i,
          //   "(",
          //   height[i],
          //   ") j is ",
          //   j,
          //   "(",
          //   height[j],
          //   ") sz is ",
          //   sz
          // );
        }
      }
    }
  }

  return sz;
}

// console.log("nums ", height1);
// console.log(maxArea(height1), ",expected is 49");
