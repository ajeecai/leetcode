const num = 58;
function intToRoman(num: number): string {
  let retString = "";
  let numStr = num.toString();
  let i = 0;
  let len = numStr.length;
  //console.log("len is ", len);
  if (len == 4) {
    let thousand = Number(numStr[i]);
    ++i;
    // numStr = numStr.slice(1);
    while (thousand--) {
      retString += "M";
    }
  }
  if (len >= 3) {
    let hundred = Number(numStr[i]);
    ++i;
    // numStr = numStr.slice(1);
    if (hundred == 9) {
      retString += "CM";
    } else if (hundred == 4) {
      retString += "CD";
    } else {
      while (hundred) {
        if (hundred >= 5) {
          retString += "D";
          hundred -= 5;
          continue;
        }
        retString += "C";
        hundred--;
      }
    }
  }
  if (len >= 2) {
    let ten = Number(numStr[i]);
    ++i;
    // numStr = numStr.slice(1);
    if (ten == 9) {
      retString += "XC";
    } else if (ten == 4) {
      retString += "XL";
    } else {
      while (ten) {
        if (ten >= 5) {
          retString += "L";
          ten -= 5;
          continue;
        }
        retString += "X";
        ten--;
      }
    }
  }
  if (len >= 1) {
    let one = Number(numStr[i]);
    if (one == 9) {
      retString += "IX";
    } else if (one == 4) {
      retString += "IV";
    } else {
      while (one) {
        if (one >= 5) {
          retString += "V";
          one -= 5;
          continue;
        }
        retString += "I";
        one--;
      }
    }
  }
  return retString;
}
console.log("ret:", intToRoman(num));
