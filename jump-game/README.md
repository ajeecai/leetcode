# jump-game

## Link

https://leetcode.com/problems/jump-game/

## Takeaway

- Pick this question to practice dynamic programming (DP).
- [Solution 1](./jump-game-outofmemory.ts) is working, it is simple and elegant, but with too much memory consumed (for case nums.length == 10000). In local environment it could work, but in leetcode, it will throw exception of out-of-memory.
- memory optimization should depend on the specific problem, especially the dp matrix is a sparse matrix. [Solution 2](./jump-game-some-opt.ts) tries to do with the memory optimization, it can handle 10000 number len of [1,0,0,1,0,0,...1,0,0] but could not handle [9997,9997,9996,9996...1,0,0] case: still out of memory and Maximum call stack size exceeded. Such kind of test cases are not friendly to Matrix for dp and recursion.
- So not every problem suits dp, for this issue, BackTracking may be better. Then in this [article](https://towardsdatascience.com/tackling-jump-game-problems-leetcode-e0a718e7dfba), the solution is easier than I thought, it is something like greedy, which I have worried that it could not solve in extreme cases. But looks like for this issue, greedy is enough.
- So these solutions are not passing leetcode checking (TODO).
