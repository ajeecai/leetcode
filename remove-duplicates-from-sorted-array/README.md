# remove-duplicates-from-sorted-array

## Link

https://leetcode.com/problems/remove-duplicates-from-sorted-array/

## Takeaway

- This is easy, the key point is the array length and cursor will change in case that one element is deleted.
- Solution#2 uses C, which is running much faster (20ms vs 155ms of Typescript version). C version memmove will take 1628ms, but with double cursor pointer, it only takes 20ms, awesome. Double pointer or sometimes variant of sliding windows could help a lot.
