function prime(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      count++;
      if (i !== n / i) {
        count++;
      }
    }
  }
  return count == 2 ? true : false;
}
console.log(prime(31));
