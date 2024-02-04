function isLeapYear(year) {
  if (year % 4 === 0) {
    return year + " is leap year";
  }
  return false;
}

const inpYear = isLeapYear(2023);
console.log(inpYear);
