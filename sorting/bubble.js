function bubble(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let isswap = 0;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isswap = 1;
      }
    }
    if (isswap == 0) {
      break;
    }
    // console.log("run");
  }
  return arr;
}
const arr = [13, 20, 9, 24, 46, 52];
console.log(bubble(arr, arr.length));
// best time complexity of bubble sort is Object(n)
