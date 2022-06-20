# container-with-most-water

## Link

https://leetcode.com/problems/container-with-most-water/

## Takeaway

- A simple solution is to multiply current and the rest of spans with two loops, but it will be absolutely Time Limit Exceeded.
- An [version](./container-with-most-water-overtime.ts) of radixSort with original index in sorted array. But go with the sorted list is not a good way, we still need to loop twice, then Time Limit Exceeded.
- The final solution is similar to #1, but based on area/height, within this range we can skip. So, sometimes we don't need to consider in too much complex ways.

## Run in node

`tsc --target es6 --lib es2015,dom container-with-most-water.ts && node container-with-most-water.js`
