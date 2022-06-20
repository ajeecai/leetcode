const str1 = "jbpnbwwd";
function lengthOfLongestSubstring1(s: string): number {
  if (!s) {
    return 0;
  }
  console.log(str);
  let sub = "";
  let num = 1;
  for (let i = 0; i < s.length; ++i) {
    sub = s[i];
    for (let j = i + 1; j < s.length; ++j) {
      if (sub.indexOf(s[j]) != -1) {
        sub = "";
        break;
      } else {
        sub += s[j];
        console.log("sub is ", sub);
        if (num < sub.length) {
          num = sub.length;
        }
      }
    }
  }

  return num;
}
console.log(lengthOfLongestSubstring1(str));
