function myPow(x: number, n: number): number {
  let sign = 1;
  if (x == 1) {
    return 1;
  } else if (x == -1) {
    if (n % 2) {
      return -1;
    } else {
      return 1;
    }
  }
  if (n < 0) {
    n = -n;
    sign = -1;
  }

  if (n == 0) {
    return 1;
  } else if (n == 1) {
    if (sign == 1) {
      return x;
    } else {
      return 1 / x;
    }
  }

  let tmp = x * x;

  let tmpArray: number[] = [];
  tmpArray.push(x); // index: 0 -> x^1
  tmpArray.push(tmp); // index: 1 -> x^2
  let m = 2;

  // start from index: 2 -> x^4, then 4, 8 ... (2^n)
  let c = 0;
  while (2 * m <= n) {
    // console.log(tmp);
    m = m << 1;
    tmp = tmp * tmp;
    if (tmp > 10000) {
      if (sign == 1) {
        return 10000;
      } else {
        let t = 1 / tmp;
        if (t < 0.000000001) {
          return 0;
        }
      }
    }
    if (c++ < 1000) {
      tmpArray.push(tmp);
    }
  }
  //   console.log(tmpArray);

  let r = n - m;
  //   console.log("left is ", r);
  // 5: 0101
  let i = 0;
  do {
    if (r & 1) {
      //   console.log("multiple tmpArray[%d] %d to %d", i, tmpArray[i], tmp);
      tmp = tmp * tmpArray[i];
    }
    r = r >> 1;
    i++;
  } while (r > 0);

  if (sign == -1) {
    tmp = 1 / tmp;
  }

  if (tmp > 10000) {
    tmp = 10000;
  } else if (tmp < -10000) {
    tmp = -10000;
  }
  //   console.log("sign ", sign);
  return tmp;
}

// console.log(myPow(2, 2147483647));
console.log(myPow(1.84364, -14));
