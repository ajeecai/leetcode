# rotate-image ✳

## Link

https://leetcode.com/problems/rotate-image/

## Takeaway

The rotation is easy, that is, ith row -> (n-1-i)th coloum. The difficulty is in place, the original data will be corruptted.

Starring at the example figure, roll the most outer circle of the square clock-wise, then the second outer and so on, recursively, see the first ===> below. Or don't use recursion, see the second ===> below.

i = 0, 1... n-1 (i++, n--), j = i, n-1-i

=== Top edge: ===
0,0 -> 0, n-1
0,1 -> 1, n-1 ===> 0, j -> j, n-1 ===> i, j -> j, n-1-i
...
0,n-1 -> n-1,n-1

=== Right edge: ===
0,n-1 -> n-1, n-1
1,n-1 -> n-1, n-2 ===> j, n-1 -> n-1, n-1-j ===> j, n-1-i -> n-1-i,n-1-j
...
n-1,n-1 -> n-1, 0

=== Bottom edge: ===
n-1, n-1 -> n-1,0
n-1, n-2 -> n-2,0 ===> n-1, n-1-j -> n-1-j,0 ===> n-1-i, n-1-j -> n-1-j,i
...
n-1, 0 -> 0, 0

=== Left edge: ===
n-1,0 -> 0,0
n-2,0 -> 0,1 ===> n-1-j, 0 -> 0, j ===> n-1-j, i -> i, j
...
0,0 -> 0, n-1

I am really satisfied with this solution, with a nice logic analysis as above, the code is concise and the submission is passed for one shot.

```
Runtime: 95 ms, faster than 60.28% of TypeScript online submissions for Rotate Image.
Memory Usage: 44.2 MB, less than 65.00% of TypeScript online submissions for Rotate Image.
```
