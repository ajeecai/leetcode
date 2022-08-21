function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  let tmp = "";
  let i = -1;
  let isEnd = false;
  while (!isEnd) {
    // if (!strs[0][i]) {
    //   break;
    // }
    prefix = tmp;
    tmp = prefix + strs[0][++i];
    for (let j = 0; j < strs.length; ++j) {
      // console.log(strs[j]);
      if (!strs[j].startsWith(tmp)) {
        isEnd = true;
        break;
      }
    }
  }
  return prefix;
}

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
