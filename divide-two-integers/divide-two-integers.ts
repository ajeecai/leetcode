let divisorN = Array<number>(11);
function initialize(divisor: number) {
  divisorN[0] = 0;
  divisorN[1] = divisor;
  for (let i = 2; i < 11; ++i) {
    divisorN[i] = divisorN[i - 1] + divisorN[1];
  }
}
function divandleft(n: number): [q: number, l: number] {
  // can optimize this lookup
  for (let i = 0; i < 10; ++i) {
    if (n >= divisorN[i] && n < divisorN[i + 1]) {
      //   console.log("return %d", i);
      return [i, n - divisorN[i]];
    }
  }
  return [0, 0];
}
function divide(dividend: number, divisor: number): number {
  let sign = 1;
  if (dividend < 0 && divisor > 0) {
    sign = -1;
  } else if (dividend > 0 && divisor < 0) {
    sign = -1;
  }

  if (dividend < 0) {
    dividend = 0 - dividend;
  }
  if (divisor < 0) {
    divisor = 0 - divisor;
  }

  const dividendStr = dividend.toString();
  const divisorStr = divisor.toString();
  const divisorLen = divisorStr.length;

  if (dividend < divisor) {
    return 0;
  }

  initialize(divisor);

  let qString: string = "";
  let i = divisorLen - 1;
  let divString = dividendStr.substring(0, divisorLen);

  //   console.log("dividendString ", dividendStr);
  do {
    let q = 0;
    let left = 0;
    // console.log("divString ", divString);

    [q, left] = divandleft(Number(divString));
    divString = left.toString();
    qString += q;

    ++i;
    // console.log(
    //   "q is %d, left is %d , qString %s, divString %s, i %d, next string is ",
    //   q,
    //   left,
    //   qString,
    //   divString,
    //   i,
    //   dividendStr[i]
    // );
  } while (dividendStr[i] && (divString += dividendStr[i]));

  let ret = Number(qString);
  if (sign == -1) {
    if (ret > 2 ** 31) {
      ret = 2 ** 31;
    }
    return -ret;
  }

  if (ret > 2 ** 31 - 1) {
    ret = 2 ** 31 - 1;
  }
  return ret;
}

// console.log(divide(-1, -1));
