# longest-palindromic-substring

## Link

https://leetcode.com/problems/longest-palindromic-substring

## Takeaway

- reverse the previous string for comparision to find out palindromic, need to compare two style: `abba` or `aba`
- typescript is good to handle the underflow or overflow of the substring, e.g, `s.substring(i - j - 1, i)` is still correct if i -j -i < 0, while in c you will be in trouble.
- For time effeciency, the second loops should start and end with some increment `j = start; j <= s.length - i` where start is the lengh of last longest palinderomic and s.length - i is the length left from this point of i.
