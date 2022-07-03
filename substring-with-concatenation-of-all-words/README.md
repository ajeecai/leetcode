# substring-with-concatenation-of-all-words

## Link

https://leetcode.com/problems/substring-with-concatenation-of-all-words/

## Takeaway

- By Bruteforce, there are n! combination of string concatenation we could not do that for the maximum is (5000!)

- Use mergeSort, [here](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort) it is a good reading about this

- Don't need to consider head for null as that in [merge-two-sorted-lists](../merge-two-sorted-lists/merge-two-sorted-lists.ts) since this is an array which can use push().

Oops, the speed is faster than only 11% :) TODO: consider more optimization later, this is a hard problem.

But, Memory Usage: 46.4 MB, less than 100.00% of TypeScript online submissions. Awesome.
