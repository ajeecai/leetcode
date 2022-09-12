# group-anagrams

## Link

https://leetcode.com/problems/letter-combinations-of-a-phone-number/


## Takeaway

Can use multiple loops for this all-combinations, but it must be slow.

Use dynamic programming, do it reversely and cache the previous caculation, so get good performance:

```
Runtime: 86 ms, faster than 71.28% of TypeScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 42.5 MB, less than 96.02% of TypeScript online submissions for Letter Combinations of a Phone Number.
```