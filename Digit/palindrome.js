function countDigit(n) {
  let newNum = 0;
  let check = n;
  while (n > 0) {
    rev = n % 10;
    newNum = newNum * 10 + rev;
    n = parseInt(n / 10);
  }
  return newNum === check ? true : false;
}
console.log(countDigit(121));
