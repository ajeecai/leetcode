const s = "baxbabad";

function longestPalindrome(s: string): string {
  let l = s[0];
  for (let i = 1; i < s.length; i++) {
    const start = Math.floor((l.length - 1) / 2);
    for (let j = start; j <= s.length - i; j++) {
      // console.log ('i is ',i, ',i+j ',i+j)
      let t = s.substring(i, i + j + 1);
      let r = s.substring(i - j, i + 1);
      let r2 = s.substring(i - j - 1, i);
      // console.log('#1, t is ', t, ', r is ', r, ',l len ', l.length,t.split('').reverse().join(''))
      // console.log('#2, t is ', t, ', r is ', r)
      // for case 'abba'
      if (t.split("").reverse().join("") == r2) {
        if (r2.length + t.length > l.length) {
          l = r2 + t;
        }
      }
      // for case 'aba'
      else if (t.split("").reverse().join("") == r) {
        if (r.length + t.length - 1 > l.length) {
          l = r + t.substring(1);
          // console.log('!!! save l as ', l)
        }
      } else {
        break;
      }
    }
  }
  return l;
}

// console.log(longestPalindrome(s))
