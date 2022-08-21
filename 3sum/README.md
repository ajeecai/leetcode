# 3sum

## Link

https://leetcode.com/problems/3sum/

## Takeaway

- Looks like binarySearch is not correct in previous example, so binarySearchv2 is created.

- The basic idea is, first sort nums in order with radix sort, then two loops. First loop is to get first num, then second. For the third, we do it with binary search. For each num found, we filter it in the existing results.

  But still very poor perforamnce :)
  Radix sort compared with built-in sort (faster 6.72% ), not too much.

```
Runtime: 4153 ms, faster than 7.42% of TypeScript online submissions for 3Sum.
Memory Usage: 64.1 MB, less than 10.71% of TypeScript online submissions for 3Sum.
```
