# longest-valid-parentheses ✳

## Link

https://leetcode.com/problems/longest-valid-parentheses/

## Takeaway

- I don't think the Examples given correctly, I had though the rules doesn't include the embedded parentheses, so here is the [Solution#1](./longest-valid-parentheses-simple.ts), of course it should not be regarded as a hard issue.

```
Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
```

Actually this is also a valid example:

```
Input: s = "()(())"
Output: 6
```

- Try to resolve by dynamic programming (DP), doing by:

  - slice the problem into **every possible** grid in **every possible** length (this is done by a double loop generating n\*n dp matrix). In each grid the result is **fixed** so that it could be **reused**. We need every possible grid status for next calculation. Think it as "store-and-reuse" methodology.

  - from top to bottom, **usually recusively** calculate and reuse the grids result to have the whole output. At each step of recusivsion, the increment is small (usuall 1 or 2), so it is easiest to calculate n+1(2). That is, dp[i][j] = dp[i+1][j-1] + x or dp[i][j] = dp[i][j-1] + y or something like that.

  A typical example is [palindrome](https://www.tutorialcup.com/leetcode-solutions/longest-palindromic-substring-leetcode-solution.htm) caculation, while [climbing stairs](../climbing-stairs/climbing-stairs.ts) is not so typical.

- I could not write for increment function for this question, which looks like too compex :) palindrome string case is much easier to me.

- So these solutions are not passing leetcode checking (TODO)
