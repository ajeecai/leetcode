# permutations

## Link

https://leetcode.com/problems/permutations/

## Takeaway

Be careful that if

```
    let subPermute_i = subPermute[i];  // This is a reference to subPermute
    retPermute.push(subPermute_i);
    ...
    retPermute[top].splice(j, 0, nums[0]); // So, will modify the original subPermute[i]
```

[solution 1](./permutations_low.ts) let subPermute_i = [...subPermute[i]]; and retPermute[top].splice(j, 0, nums[0]); will cost too much time, so get very poor performance.

```
Runtime: 162 ms, faster than 7.67% of TypeScript online submissions for Permutations.
Memory Usage: 45.6 MB, less than 77.24% of TypeScript online submissions for Permutations.
```

[solution 2](./permutations.ts) does better using concat to generate the output other than [... array] and splice.

```
Runtime: 115 ms, faster than 62.40% of TypeScript online submissions for Permutations.
Memory Usage: 45 MB, less than 94.63% of TypeScript online submissions for Permutations.
```
