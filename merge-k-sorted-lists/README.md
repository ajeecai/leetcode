# merge-k-sorted-lists

## Link

https://leetcode.com/problems/merge-k-sorted-lists/

## Takeaway

- [Solution#1](./merge-k-sorted-lists.ts) just work it like [merge-two-sorted-lists](../merge-two-sorted-lists/merge-two-sorted-lists.ts). The submission shows low perforamce in k lists (faster than 6% only), it is true because each round of sorted we have to do k comparisons with only one node done and doesn't concat rest of list.

- [Solution#2](./merge-k-sorted-lists2.ts) uses [mergeTwoSortedLists](../merge-two-sorted-lists/merge-two-sorted-lists.ts), based on [divide-and-conquer](../climbing-stairs/README.md) algorithm. The performance is much better.
