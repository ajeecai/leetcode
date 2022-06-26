function multiply(num1: string, num2: string): string {
  if (num1.length > num2.length) {
    [num1, num2] = [num2, num1];
  }
  let n1 = num1
    .split("")
    .reverse()
    .map((s) => Number(s));
  let n2 = num2
    .split("")
    .reverse()
    .map((s) => Number(s));

  let digits = Array.from(Array(10), (): number[] => Array<number>(n2.length));

  for (let i = 0; i < n1.length; ++i) {
    for (let j = 0; j < n2.length; ++j) {
      //   console.log("n1[%d] is %d", i, n1[i]);
      digits[n1[i]][j] = n1[i] * n2[j];
    }
  }
  console.log("digits is ", digits);

  let matrix = Array.from(Array(n1.length), (): number[] => []);

  let of = n1.length; // overflow len
  let len = n1.length + n2.length + of;
  for (let i = 0; i < n1.length; ++i) {
    matrix[i] = Array<number>(i)
      .fill(0)
      .concat(digits[n1[i]], Array<number>(len - i - n2.length).fill(0));
  }
  console.log("matrix is ", matrix);

  let accum = 0;
  let ret = Array<number>(n2.length + of).fill(0);
  for (let j = 0; j < n2.length + of; ++j) {
    ret[j] += accum;
    for (let i = 0; i < n1.length; ++i) {
      //   console.log(
      //     "i %d, j %d, ret[%j] %d, accum %d, matrix[i][j] %d",
      //     i,
      //     j,
      //     j,
      //     ret[j],
      //     accum,
      //     matrix[i][j]
      //   );
      ret[j] += matrix[i][j];
    }
    accum = Math.floor(ret[j] / 10);
    console.log("ret[%d] %d, accum %d", j, ret[j], accum);
    ret[j] %= 10;
  }
  console.log("ret is ", ret);
  const r = ret.reverse();
  for (let i = 0; i < r.length; ++i) {
    if (r[i] != 0) {
      return r.slice(i).join("");
    }
  }

  return "0";
}

const num1 = "1393",
  num2 = "29456";
// Output: "56088"
console.log(multiply(num1, num2));
