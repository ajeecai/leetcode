# twoSum

## Link

https://leetcode.com/problems/two-sum/

## Takeaway

- To sort the numbers in order then binary search for speed consideration. radix sort is O(n) while binary search is O(lgn), so the total time complexity is O(nlgn).

  some Typescript syntax: to create empty two-dimentional array `Array.from(new Array(10), (): number[] => [])`
  To flatten this two dimention into one:

  ```
      sorted.map((v) => {
      n_tmp = n_tmp.concat(v);
      });
  ```

- when containing negtive number in array, radix sort could add a padding to turn all numbers into positive then minus the padding after order. To get each digit of the number, use

```
    digit = digit - (i % 10 ** (cnt - 1));
    digit = digit / 10 ** (cnt - 1);
```

- binary search in array with left and right cursors.
