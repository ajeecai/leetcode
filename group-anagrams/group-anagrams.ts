interface MyStr {
  value: string;
  index: number;
}
function strCmp(a: string, b: string) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
function groupAnagrams(strs: string[]): string[][] {
  let myStr: MyStr[] = [];

  let newStrs = strs.map((v) => {
    return Array.from(v).sort(strCmp).join("");
  });
  newStrs.forEach((v, i) => {
    myStr.push({ value: v, index: i });
  });

  console.log("after sorting on each item, strs ", newStrs);
  myStr.sort((a, b) => {
    return strCmp(a.value, b.value);
  });
  console.log("after sorting on each myStr:", myStr);
  let ret: string[][] = [];
  let anagram: string[] = [strs[myStr[0].index]];
  for (let i = 1; i < myStr.length; ++i) {
    if (myStr[i].value == myStr[i - 1].value) {
      anagram.push(strs[myStr[i].index]);
    } else {
      ret.push(anagram);
      anagram = [strs[myStr[i].index]];
    }
  }
  if (anagram.length) {
    ret.push(anagram);
  }
  return ret;
}
// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const strs = ["a"];
console.log(groupAnagrams(strs));
