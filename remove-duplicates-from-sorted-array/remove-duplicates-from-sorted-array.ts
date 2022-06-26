function removeDuplicates(nums: number[]): number {
  let len = nums.length;
  if (len == 0) {
    return 0;
  }
  let val = nums[0];
  for (let i = 1; i <= len; ++i) {
    if (val == nums[i]) {
      nums.splice(i, 1);
      len = nums.length;
      --i;
    } else {
      val = nums[i];
    }
  }
  return nums.length;
}
