const nums = [1, 0];
function sortArray(nums: number[]): number[] {
  if (nums.length == 1) {
    return nums;
  }
  const md = Math.floor(nums.length / 2);
  const lowHalf = sortArray(nums.slice(0, md));
  const highHalf = sortArray(nums.slice(md));
  return merge2SortedArray(lowHalf, highHalf);
}
function merge2SortedArray(n1: number[], n2: number[]): number[] {
  let ret: number[] = [];
  let i = 0;
  let j = 0;
  while (1) {
    if (i == n1.length) {
      ret = ret.concat(n2.slice(j));
      return ret;
    }
    if (j == n2.length) {
      ret = ret.concat(n1.slice(i));
      return ret;
    }
    if (n1[i] > n2[j]) {
      ret.push(n2[j]);
      j++;
    } else {
      ret.push(n1[i]);
      i++;
    }
  }
  return ret;
}
console.log(sortArray(nums));
