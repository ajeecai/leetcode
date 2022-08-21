function firstUniqChar(s: string): number {
  let i = 0;
  let j = 0;

  let dup = new Set();

  for (i = 0; i < s.length; ++i) {
    if (dup.has(i)) {
      continue;
    }
    for (j = 0; j < s.length; ++j) {
      if (i == j) {
        continue;
      } else if (s[i] == s[j]) {
        dup.add(j);
        break;
      }
    }

    if (j == s.length) {
      return i;
    }
  }
  return -1;
}

const s = "loveleetcode";
// const s = "leetcode";
console.log(firstUniqChar(s));
