# search-insert-position

## Link

https://leetcode.com/problems/search-insert-position/

## Takeaway

- This is an easy question, the main trick is in the left, right cursors at boundary, otherwise it is easy to endless loop, my handling is

```
if (nums[md] < target) {
    left = md + 1 > right ? right : md + 1;
  } else {
    right = left < md - 1 ? md - 1 : left;
  }
```

That is, maure sure left <= right.

Performnace is not good, maybe there are too many `if-else` in the code, can be optimized

```
Runtime: 111 ms, faster than 25.32% of TypeScript online submissions for Search Insert Position.
Memory Usage: 44 MB, less than 90.91% of TypeScript online submissions for Search Insert Position.
```
