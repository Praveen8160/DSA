function allDivisions(n) {
  const arr = [];
  //   console.log(Math.sqrt(n));
  for (let i = 1; i <= Math.sqrt(n); i++) {
    n % i == 0 && (arr.push(i), n / i !== i && arr.push(n / i));
  }
  return arr;
}
const arr2 = allDivisions(36);
// console.log(allDivisions(36))
console.log(arr2.sort((a, b) => a - b));
