# trapping-rain-water

## Link

https://leetcode.com/problems/trapping-rain-water/

## Takeaway

- This looks like [container-with-most-water](../container-with-most-water/README.md) but actually it is quite differnt.

- This [solution](./trapping-rain-water-callstackexceeded.ts) should be OK but failed at a very long input because of calling stack exceeded. Basic idea is getting the higest and second high (or equal to highest) bar out of all bars, they certainly forms a tank. Then the area before and after this tank could be recursively call the same getWater function.

  But recursion must be in trouble if the calling stack is too many. Then let's try non-recursive version.

- [non-recursive version](./trapping-rain-water.ts) is a transformation of the recursive one, each calling return the current value and the two dimentional array of left and right sides of embeded subcalling. With the limiation of MAX_LEVEL, we won't exceed the calling depth. Then we loop through the two dimentional array for next recursion. This is a solution to resolve problems in recursive way but with less or no recursive stacks (when MAX_LEVEL=1).

  Performance is not good:

```
Runtime: 1635 ms, faster than 10.20% of TypeScript online submissions for Trapping Rain Water.
Memory Usage: 105.3 MB, less than 5.34% of TypeScript online submissions for Trapping Rain Water.
```

TODO:

- when get highest and second high, try to get the maximun span.
- Can the order be saved for using in recursion?
- slice, concat may consume much time to generate a new array.
