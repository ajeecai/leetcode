# merge-two-sorted-lists

## Link

https://leetcode.com/problems/merge-two-sorted-lists/

## Takeaway

- The merge could be learned from mergeSort
- for the first submission I put the similar code inside while

```
if (!ret) {
    ret = rCur
}
```

The code looks not good, we could make the ret not null before while by preprocessing.

If we new each ListNode for the returned list, the result is only faster than 6%. Reuse the existing node then faster than 62%, if it doesn't care the input lists are corrupted.
