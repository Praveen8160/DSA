function leftROtate(arr, k) {
  const arr2 = [];
  let n = arr.length;
  for (let i = k; i < n; i++) {
    arr2[i - k] = arr[i];
  }
  for (let i = 0; i < k; i++) {
    arr2[n - k + i] = arr[i];
  }
  return arr2;
}
const arr = [1,2,3,4,5,6,7];
console.log(leftROtate(arr, 3));
