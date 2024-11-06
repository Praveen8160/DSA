function selection(arr) {
  let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i; j < n; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        //   console.log(arr)
        }
      }
    }

//   let min = 0;
//   let index = 0;
//   for (let i = 0; i < n - 1; i++) {
//     min = Math.min(...arr.slice(i, n));
//     index = arr.indexOf(min);
//     if (arr[i] > min) {
//       [arr[i], arr[index]] = [arr[index], arr[i]];
//     }
//   }
}
const arr = [13, 46, 24, 52, 20, 9];
selection(arr);
console.log(arr);
