function fibonacci(n) {
  if (n <= 1) return n;
  //   let last = fibonacci(n - 1);
  //   let secondlast = fibonacci(n - 2);
  return fibonacci(n - 2) + fibonacci(n - 1);
}
console.log(fibonacci(6));

