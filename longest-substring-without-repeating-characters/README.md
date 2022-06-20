# longest-substring-without-repeating-characters

## Link

https://leetcode.com/problems/longest-substring-without-repeating-characters

## Takeaway

- [#1](./longest-substring-without-repeating-characters.ts), simple loops to find out the longest. Actually it is triple loops because string.indexOf is a intrinsic loop. Surprisingly this solution is accepted and faster than 20% in leetcode.

- [#2](./longest-substring-without-repeating-characters2.ts), an improved version, use only two loops with a sliding window, which is faster than 60% in leetcode. This is O(n^2) while some guy claims O(n) [here](https://www.code-recipe.com/post/longest-substring-without-repeating-characters).

  Sliding window seems a great tool to solve many problems.
