# median-of-two-sorted-arrays

## Link

https://leetcode.com/problems/median-of-two-sorted-arrays/

## Takeaway

- Since we have [radixSort](../twoSum/README.md), this is easy to do. We only need to take care of the number of array is even or odd.
- Actually since these two arrays are sorted already, we can use mergeSort to concat them and find out the median, which is much easier.
