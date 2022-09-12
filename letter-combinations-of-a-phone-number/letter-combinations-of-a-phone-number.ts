function letterCombinations(digits: string): string[] {
  const len = digits.length;
  if (len == 0) {
    return [];
  }
  const str = [
    [""],
    [""],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  let ret: string[] = [...str[digits[len - 1]]];
  console.log(str[digits[len - 1]]);

  for (let i = len - 2; i >= 0; --i) {
    console.log("now prefix with (%d)", digits[i], str[digits[i]]);
    let tmpRet: string[] = [];
    ret.map((v) => {
      console.log("v is ", v);
      str[digits[i]].map((vv: string) => {
        tmpRet.push(vv + v);
      });
      console.log("tmp ", tmpRet);
    });
    ret = tmpRet;
  }
  return ret;
}

console.log(letterCombinations("234"));
