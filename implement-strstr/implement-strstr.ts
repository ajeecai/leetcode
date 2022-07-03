function strStr(haystack: string, needle: string): number {
  if (!needle) {
    return 0;
  }
  // a b c d e f g h
  // b c d
  for (let i = 0; i <= haystack.length - needle.length; ++i) {
    if (haystack.slice(i, i + needle.length) == needle) {
      return i;
    }
  }
  return -1;
}
console.log(strStr("adddbc,dda", ""));
