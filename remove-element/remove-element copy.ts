function removeElement(nums: number[], val: number): number {
  let len = nums.length;

  for (let i = 0; i < len; ++i) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      len -= 1;
      --i;
    }
  }
  return len;
}
