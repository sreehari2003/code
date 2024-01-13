function myAtoi(s) {
  let temp = s.trim().split(" ").join("");

  let res = "";
  let sign = 1;

  // Handle sign
  if (temp[0] === "-" || temp[0] === "+") {
    sign = temp[0] === "-" ? -1 : 1;
    temp = temp.slice(1); // Skip the sign character
  }

  for (const char of temp) {
    if (res.length === 0 && Number(char) === 0) {
      continue;
    }
    if (!isNaN(Number(char))) {
      res += char;
    } else {
      break;
    }
  }

  const result = sign * Number(res);

  console.log(result);

  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = (-2) ** 31;
  return Math.max(Math.min(result, INT_MAX), INT_MIN);
}

myAtoi("   +0 123");
