function insertion(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j >= 1; j--) {
      if (arr[j] > arr[j - 1]) {
        break;
      } else if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        continue;
      }
    }
  }
  return arr;
}
const arr = [9, 15, 14, 12, 6, 3, 13];
console.log(insertion(arr, arr.length));
