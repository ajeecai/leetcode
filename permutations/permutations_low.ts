function permute(nums: number[]): number[][] {
  if (nums.length == 1) {
    return [nums];
  }
  let subPermute = permute(nums.slice(1));
  //   console.log("return subPermute ", subPermute);
  let retPermute: number[][] = [];
  for (let i = 0; i < subPermute.length; ++i) {
    let len = subPermute[i].length;
    // <=len
    for (let j = 0; j <= len; ++j) {
      // splice is done in place so get a temp var
      let subPermute_i = [...subPermute[i]];
      //   console.log("subPermute_i is ", subPermute_i);
      retPermute.push(subPermute_i);
      let top = retPermute.length - 1;
      //   console.log("top is ", retPermute[top]);
      retPermute[top].splice(j, 0, nums[0]);
      //   console.log("after splice, top is ", retPermute[top]);
    }
    // console.log("end j");
  }
  return retPermute;
}

const nums = [1, 2, 3];
// console.log(permute(nums));
