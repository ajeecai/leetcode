# combination-sum

## Link

https://leetcode.com/problems/combination-sum/

## Takeaway

- At the first glance, think of recursion with Brute force enum. But spent much time on considering if there is optimization by dp (so sometimes we should not stuck into the old way) ...and very puzzled by unlimited repeated times, actually it is done by loop from 0 in each recursive calling.
- In the main logic function, some return to continue, some return to backtracking
- Use incremental start point to skip duplicate

```
Runtime: 116 ms, faster than 69.41% of TypeScript online submissions for Combination Sum.
Memory Usage: 46.3 MB, less than 58.88% of TypeScript online submissions for Combination Sum.
```
