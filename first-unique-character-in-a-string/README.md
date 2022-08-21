# first-unique-character-in-a-string

## Link

https://leetcode.com/problems/first-unique-character-in-a-string/

## Takeaway

- [First one](./first-unique-character-in-a-string-with-sort.ts) with sort gets very poor performance

```
Runtime: 390 ms, faster than 5.22% of TypeScript online submissions for First Unique Character in a String.
Memory Usage: 62.9 MB, less than 5.22% of TypeScript online submissions for First Unique Character in a String.
```

- Then use non-sort, simply loop twice, the result is better

```
Runtime: 185 ms, faster than 32.09% of TypeScript online submissions for First Unique Character in a String.
Memory Usage: 45.8 MB, less than 70.15% of TypeScript online submissions for First Unique Character in a String.
Next challenges:
```

[Further improvement](./first-unique-character-in-a-string.ts) with Set to filter the dup items in the loop, performance is double

```
Runtime: 136 ms, faster than 73.38% of TypeScript online submissions for First Unique Character in a String.
Memory Usage: 45.9 MB, less than 70.15% of TypeScript online submissions for First Unique Character in a String.
Next challenges:
```

Conclusion is, a sorted data struct can resolve many problems but it may not be the quickest one. Simple loops may help better in many cases.
