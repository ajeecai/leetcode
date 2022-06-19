function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  // 121
  //
  const s = x.toString();
  const n = Math.floor(s.length / 2);
  if (s.length % 2) {
    if (s.substring(0, n + 1) == s.substring(n).split("").reverse().join("")) {
      return true;
    }
  } else {
    if (s.substring(0, n) == s.substring(n).split("").reverse().join("")) {
      return true;
    }
  }
  return false;
}

// console.log(isPalindrome(-12344321))
