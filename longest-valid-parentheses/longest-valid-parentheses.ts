class V {
  c: number; // count
  l: number; // left edge of match
  r: number; // right edge of match
}
function solve(s: string, i: number, j: number, dp: V[][]): number {
  if (dp[i][j] != undefined) {
    return dp[i][j].c;
  }
  if (i == j) {
    dp[i][j].c = 0;
    dp[i][j].l = dp[i][j].r = i;
    return dp[i][j].c;
  }
  if (j - i == 2) {
    if (s[i] == "(" && s[j] == ")") {
      dp[i][j].c = 1;
      dp[i][j].l = i;
      dp[i][j].r = j;
      return dp[i][j].c;
    }
  }
  let count = solve(s, i, j - 1, dp);

  // I could not write for this incremental, looks like too compex :)
  // ()) () (  #1
  // () )
  // ( ()
  if (dp[j - 1][j].c == 1 && dp[i][j - 1].r == j - 1) {
    //#1
    dp[i][j].c += 1;
    dp[i][j].r = j;
  }
  return count;
}
function longestValidParentheses(s: string): number {
  // dp[i][j]: the max consecutive parentheses from i to j
  let dp = Array.from(Array(s.length), (): V[] => Array(s.length));

  if (s.length == 0 || s.length == 1) {
    return 0;
  }

  for (let i = 0; i < s.length; ++i) {
    for (let j = i; j < s.length; ++j) {
      // to calculate dp
      solve(s, i, j, dp);
    }
  }
  return solve(s, 0, s.length - 1, dp);
}

console.log(longestValidParentheses("()(()))"));
