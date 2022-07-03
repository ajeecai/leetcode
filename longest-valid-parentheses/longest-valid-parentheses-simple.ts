function longestValidParentheses_simple(s: string): number {
  let p = ["(", ")"];
  let c = 0;
  let i = 0;
  let j = 0;
  let max = 0;

  s += s[s.length - 1]; // make the trailer easy to do with

  while (i < s.length) {
    console.log("s[%d] %s, p[%d] %s", i, s[i], j, p[j % 2]);
    if (s[i] == p[j % 2]) {
      c++;
      console.log("c %d", c);
      i++;
      j++;
    } else {
      j = 0;
      c = c - (c % 2);
      max = max < c ? c : max;
      c = 0;
      console.log("summary: c %d, max %d", c, max);
      while (s[i] == ")") {
        i++;
      }
    }
  }
  return max;
}

console.log(longestValidParentheses("(((((())))))((())()()("));
