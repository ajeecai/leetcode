# multiply-strings

## Link

https://leetcode.com/problems/multiply-strings/

## Takeaway

- 1393 \* 29456,

```
digits is  [
  [ <5 empty items> ],
  [ 6, 5, 4, 9, 2 ], <=  1 * 65492 (reverse order)
  [ <5 empty items> ],
  [ 18, 15, 12, 27, 6 ], <= 3 * 65492 (reused twice)
  [ <5 empty items> ],
  [ <5 empty items> ],
  [ <5 empty items> ],
  [ <5 empty items> ],
  [ <5 empty items> ],
  [ 54, 45, 36, 81, 18 ] <= 9 * 65492
]
matrix is  [
  [ 3 * 65492: each byte don't carry over for now until final sum up
    18, 15, 12, 27, 6, 0,  0,  0,  0,  0, 0,  0, 0
  ],
  [ V aligned  9 * 65492
    0, 54, 45, 36, 81, 18, 0,  0,  0,  0,  0, 0, 0
  ],
  [ V  V  3 * 65492
    0, 0, 18, 15, 12, 27,  6, 0,  0,  0,  0,  0, 0
  ],
  [ V  V  V  1 * 65492
    0, 0, 0, 6, 5, 4, 9, 2, 0, 0, 0,  0,  0 ]
]
```

The performance doesn't look good, only faster than 28%.
