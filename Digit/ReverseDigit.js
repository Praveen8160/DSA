function countDigit(n) {
  let newNum = 0;
  let count = 0;
  while (n > 0) {
    rev = n % 10;
    newNum = newNum * 10 + rev;
    n = parseInt(n / 10);
  }
  return newNum;
}
console.log(countDigit(7));
