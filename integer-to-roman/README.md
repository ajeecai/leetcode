# integer-to-roman

## Link

https://leetcode.com/problems/integer-to-roman/

## Takeaway

- Could this be called Medium? It looks like easy. With slice, there is more memory and time required:

```
Runtime: 343 ms, faster than 6.77% of TypeScript online submissions for Integer to Roman.
Memory Usage: 53.4 MB, less than 5.29% of TypeScript online submissions for Integer to Roman.
```

Then we don't rely on slice, go in a wiser way, the performance becomes much better:

```
Runtime: 181 ms, faster than 70.83% of TypeScript online submissions for Integer to Roman.
Memory Usage: 48.6 MB, less than 60.47% of TypeScript online submissions for Integer to Roman.
```
