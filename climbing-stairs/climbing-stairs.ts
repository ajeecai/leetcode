const nstairs = 2;
function climbStairs(n: number): number {
  // console.log("nstarts %d", nstairs);
  let p = new Array<number>(n + 1);
  p[n - 1] = 1;
  p[n - 2] = 2;
  // console.log("#1 p[%d] %d", n - 1, p[n - 1]);
  // console.log("#2 p[%d] %d", n - 2, p[n - 1]);

  for (let i = n - 3; i >= 0; --i) {
    p[i] = p[i + 1] + p[i + 2];
    // console.log("p[%d] %d", i, p[i]);
  }
  return p[0];
}
// console.log("cal is %d", climbStairs(nstairs));
