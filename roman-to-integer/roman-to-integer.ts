// const s = "III";
// const s = "LVIII";
const s = "MCMXCIV";
function romanToInt(s: string): number {
  let num: number = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    switch (s[i]) {
      case "I":
        num++;
        break;
      case "V":
        num += 5;
        if (s[i - 1] == "I") {
          num -= 1;
          i--;
        }
        break;
      case "X":
        num += 10;
        if (s[i - 1] == "I") {
          num -= 1;
          i--;
        }
        break;
      case "L":
        num += 50;
        if (s[i - 1] == "X") {
          num -= 10;
          i--;
        }
        break;
      case "C":
        num += 100;
        if (s[i - 1] == "X") {
          num -= 10;
          i--;
        }
        break;
      case "D":
        num += 500;
        if (s[i - 1] == "C") {
          num -= 100;
          i--;
        }
        break;
      case "M":
        num += 1000;
        if (s[i - 1] == "C") {
          num -= 100;
          i--;
        }
        break;
    }
  }
  return num;
}
console.log(romanToInt(s));
