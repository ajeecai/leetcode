function digit2Num(c: string): number {
  switch (c) {
    case "0":
      return 0;
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
  }
  return -1;
}

function myAtoi(s: string): number {
  let num = 0;
  let index = 0;
  let sign = 1;

  for (index = 0; index < s.length; ++index) {
    if (s[index] == " " || s[index] == "\t") {
      continue;
    } else {
      break;
    }
  }
  let i = index;

  if (s[i] == "+") {
    sign = 1;
    i++;
  } else if (s[i] == "-") {
    sign = -1;
    i++;
  }
  // let cnt = 1000;
  // console.log('i start from ', i)
  while (1) {
    // if (cnt -- < 0) {
    //     break;
    // }

    if (undefined === s[i] || s[i] > "9" || s[i] < "0") {
      break;
    }

    // num = num *10 + (s[i] - '0');
    num = num * 10 + (Number(s[i]) - Number("0"));
    // num = num * 10 + digit2Num(s[i]);

    // console.log('s[i] is ', s[i], ' num ', num)
    if (sign == -1 && num > 2 ** 31) {
      console.log("min");
      return -(2 ** 31);
    } else if (sign == 1 && num > 2 ** 31 - 1) {
      console.log("max");
      return 2 ** 31 - 1;
    }

    i++;
  }

  return sign * num;
}

// console.log('myatoi', myAtoi('-2147483649'))
