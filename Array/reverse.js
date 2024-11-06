function reverse(arr) {
  for (i = 0; i < (arr.length - 1) / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
}
const arr = [10, 23, 34, 87, 5, 65];
// arr.reverse();
reverse(arr);
console.log(arr);
