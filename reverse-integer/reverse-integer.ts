function reverse(x: number): number {
  let sign = 1;
  if (x < 0) {
    sign = -1;
    x = -x;
  }
  let s = x.toString();
  x = sign * Number(s.split("").reverse().join(""));
  if (sign == 1 && x > 2 ** 31 - 1) {
    x = 0;
  } else if (sign == -1 && x < -(2 ** 31)) {
    x = 0;
  }
  return x;
}
