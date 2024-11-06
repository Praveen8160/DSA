// function printsum(i, n, sum) {
//   if (i > n) return console.log(sum);
//   printsum(i + 1, n, sum + i);
// }
// printsum(1, 2, 0);

// Functional Recursion

// function printsum(n) {
//   if (n == 0) return 0;
//   return n + printsum(n - 1);
// }
// console.log(printsum(4));

function printfectorial(n) {
  if (n == 0) return 1;
  return n * printfectorial(n - 1);
}
console.log(printfectorial(3));
