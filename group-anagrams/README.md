# group-anagrams

## Link

https://leetcode.com/problems/group-anagrams/

## Takeaway

An easy way is to sort each string like "acb" into "abc", then sort against string array into "abc", "abc","cdefg","cdefg" with original index (using customized interface type), now we could easily find out the group. 

But since we need two sorting by this method, the performance won't be good enough.

```
Runtime: 250 ms, faster than 26.81% of TypeScript online submissions for Group Anagrams.
Memory Usage: 53 MB, less than 90.50% of TypeScript online submissions for Group Anagrams.
```
