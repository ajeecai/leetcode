# string-to-integer-atoi

## Link

https://leetcode.com/problems/string-to-integer-atoi

## Takeaway

### C program

- boundary is key, as said:

```
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
```

In leetcode running environemnt it is 32 bit so we could not use long long type to store val\*10 which may overflow. So we may rely on `if ((val > ((unsigned int)1 << 31) / 10) || ((val == ((unsigned int)1 << 31) / 10) && number >= 8))`.

- Alternatively, use big number to do the `val*10`

### typescript program

- It is obvious that typescript is much easier to handle the boundary issues, because `number` could hold a very big number. Typescript doesn't allow `num *10 + (s[i] - '0')` where s[i] is a string, while `s[i] > "9"` is good. That is wired, that is why we have a lengthy function `digit2Num` for this purpose.

  UPDATE: can do it in this way `Number(s[i]) - Number("0")`.

  If rely on built in Typescript conversion function, we can also resolve in another way: exact all consecutive numbers e.g. '-12368' from '-12368abc', Number('-12368'), then judge if this number is overflowed or underflowed.

- `undefined` could not fall into `s[i] > "9" || s[i] < "0"`.
