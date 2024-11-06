function countDigit(n) {
  let count = 0;
  while (n > 0) {
    count += 1;
    n = parseInt(n / 10);
  }
  return count;
}
console.log(countDigit(8));
