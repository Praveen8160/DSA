function missingNumber(arr, n) {
  const hash = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    hash[arr[i]] = 1;
  }
  for (let i = 1; i <= n + 1; i++) {
    if (hash[i] == 0) {
      return i;
    }
  }
}
const arr = [1, 2, 3, 5];
console.log(missingNumber(arr, arr.length));
