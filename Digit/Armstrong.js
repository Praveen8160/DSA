function countDigit(n) {
  let newNum = 0;
  let digitlength = n.toString().length;
  let check = n;
  while (n > 0) {
    rev = n % 10;
    newNum += Math.pow(rev, digitlength);
    n = parseInt(n / 10);
  }
  return newNum === check ? true : false;
}
console.log(countDigit(9474));
