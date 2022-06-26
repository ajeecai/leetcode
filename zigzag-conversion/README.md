# zigzag-conversion

## Link

https://leetcode.com/problems/zigzag-conversion

## Takeaway

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

It is obvious that we can use two dimentional array to save. Somewhat it is wasteful because it is a sparse matrix, but anyway, let's do in this way.

First we know the row is n, then what is the coloum? We don't want to waste too much so hope the coloum just matches the requirement.
Calculate like this:

x: numbers of columns which contains full n chars like first one.
y: maximum number of columns which only have one char like A L R I above.
1: the last column with 0 ~ n-1 chars, let's say z

Then, nx + y + 1z = lenof(str), where `y= (n -2) * x`. So we have `nx + (n - 2) * x +z = len` ==> `nx + (n-2)*x + z = nx + nx -2x + z = (2n-2)x + z = lenof(str)`.

So, `len = z mod(2n-2)` where 0 < z < n-1, that is easy to find out z and => x and y.

The performance could be better since there is two loops inside.
