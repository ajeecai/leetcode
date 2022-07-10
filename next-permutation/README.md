# next-permutation ✳

## Link

https://leetcode.com/problems/next-permutation/

## Takeaway

- To resolve problems, first give concrete example such as [1,3,6,2,1], how does **human resolve it** manually?

  - check cursor backward, if it is alreay descending, leave it as is.
  - Otherwise, let's say current cursor is #1, sub array is [3,6,2,1], pick the nearest higher to cursor number (6), and swap them, get [6,3,2,1], then sort the [3,2,1] into ascending order, get [6,1,2,3], concat the rest into [1,6,1,2,3] which is the next greater of [1,3,6,2,1].
  - If all the array are already in descending order, that means reach the end, we simple sort the array into ascending order to get next.

This methodology with concrete example can find out the pattern and then generic solution (learned from [this book](http://www.math.brown.edu/johsilve/frinttocprefintro.pdf)), then try if there is optimization for duplicate calculation (dp), or reduced loops, etc.

- Usually it is better to write this human thinking on paper which is much convinient than keyboard typing. But sometimes a prototype in computer can help concrete thinking too (especially there are multiple recursion), while I work on [this](../combination-sum/combination-sum.ts)

```
Runtime: 131 ms, faster than 18.45% of TypeScript online submissions for Next Permutation.
Memory Usage: 44.9 MB, less than 67.96% of TypeScript online submissions for Next Permutation.
```

Typescript or javascript can't get a subarray in place, that is why it is in low performance.
