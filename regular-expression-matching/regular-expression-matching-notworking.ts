const input_s = "aa";
const reg = "a*a";
// loops two string at the same pace to compare,
// 1. for any mismatch of char, return false
// 2. if meet . in p, move s one step
// 3. if meet * in p  get previous char x, get next y (if it is ., then move), move s until seeing non-x or seeing y, then do #1

function isMatch(s: string, p: string): boolean {
  let si = 0;
  let pi = 0;
  let pprev = "";
  let pnext = "";

  console.log("s is %s, p is %s", s, p);
  while (1) {
    console.log("p[%d]: %s, s[%d]: %s", pi, p[pi], si, s[si]);
    if (p[pi] == ".") {
      pi++;
      si++;
    } else if (p[pi] == "*") {
      pprev = p[pi - 1];
      pnext = p[pi + 1];
      pi++;
      console.log("pprev %s, pnext %s", pprev, pnext);
      while (1) {
        if (pnext != undefined) {
          console.log("pnext is not undefined, s[si] %s", s[si]);
          if (pprev == ".") {
            if (s[si] != pnext) {
              si++;
              continue;
            } else {
              break;
            }
          } else if (s[si] != pprev) {
            console.log("#s[si] %s, pprev %s, return false", s[si], pprev);
            return false;
          } else if (s[si] == pprev) {
            si++;
          }
        } else {
          return true;
        }
        si++;
      }
    } else if (s[si] == p[pi] && s[si] !== undefined) {
      si++;
    } else if ((s[si] === p[pi]) === undefined) {
      return true;
    } else if (s[si] !== p[pi] && (s[si] == undefined || p[pi] == undefined)) {
      return false;
    } else {
      console.log("??? p[%d]: %s, s[%d]: %s", pi, p[pi], si, s[si]);
      si++;
      pi++;
    }
  }
  return false;
}

console.log(isMatch(input_s, reg));
