class VAL_IDX {
  val: string;
  index: number;
}

function firstUniqChar(s: string): number {
  if (s.length == 0) {
    return -1;
  } else if (s.length == 1) {
    return 0;
  }

  let valWithIdx: VAL_IDX[] = [];
  for (let i = 0; i < s.length; ++i) {
    valWithIdx.push({ val: s[i], index: i });
  }
  valWithIdx.sort((a, b) => {
    return a.val.charCodeAt(0) - b.val.charCodeAt(0);
  });
  //   console.log(valWithIdx);
  let indexFound = 0xffffffff;
  let i = 0;
  while (i < valWithIdx.length) {
    if (valWithIdx[i].val == valWithIdx[i + 1]?.val) {
      i += 2;
    } else if (valWithIdx[i].val == valWithIdx[i - 1]?.val) {
      i += 1;
    } else {
      indexFound =
        indexFound > valWithIdx[i].index ? valWithIdx[i].index : indexFound;
      i += 1;
    }
  }
  return indexFound == 0xffffffff ? -1 : indexFound;
}

// const s = "loveleetcode";
const s = "leetcode";
console.log(firstUniqChar(s));
