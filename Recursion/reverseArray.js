function reverseArray(i, arr, n) {
  if (i >= n) return;
  [arr[i], arr[n]] = [arr[n], arr[i]];
  reverseArray(i + 1, arr, n - 1);
}
const arr = [10, 20, 40, 50, 60];
let n = arr.length-1;
reverseArray(0, arr, n);
console.log(arr)
