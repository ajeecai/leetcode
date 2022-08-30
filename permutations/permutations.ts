function permute(nums: number[]): number[][] {
  if (nums.length == 1) {
    return [nums];
  }
  let subPermute = permute(nums.slice(1));
  // console.log("return subPermute ", subPermute);
  let retPermute: number[][] = [];
  for (let i = 0; i < subPermute.length; ++i) {
    let len = subPermute[i].length;
    let subPermute_i = subPermute[i];
    // <=len
    for (let j = 0; j <= len; ++j) {
      retPermute.push(
        subPermute_i.slice(0, j).concat(nums[0]).concat(subPermute_i.slice(j))
      );

      // console.log("after push, ", retPermute);
    }
    // console.log("end j");
  }
  return retPermute;
}

const nums = [1, 2, 3];
console.log(permute(nums));
