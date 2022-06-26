const str = "jbpnbwwd";
function lengthOfLongestSubstring(s: string): number {
  if (!s) {
    return 0;
  }
  if (s.length == 1) {
    return 1;
  }
  // console.log(str);
  let l = 0;
  let r = 0;
  let num = 1;
  for (let i = 1; i < s.length; ++i) {
    // can use indexOf
    for (let j = l; j <= r; ++j) {
      if (s[j] == s[i]) {
        l = j + 1; //left windows >>>>>
        // console.log(
        //   "l->j, l is ",
        //   l,
        //   " r is ",
        //   r,
        //   " sub ",
        //   s.substring(l, r + 1)
        // );
      }
    }

    //after the fitler, the rest of in this window could not be the same as s[i]
    r = i; //right window >> 1
    // console.log("r>>1, l is ", l, " r is ", r, " sub ", s.substring(l, r + 1));
    if (r - l + 1 > num) {
      num = r - l + 1;
    }
  }

  return num;
}
// console.log(lengthOfLongestSubstring(str));
