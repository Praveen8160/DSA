const arr = [10, 20, 20, 40];
const checksorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log(false);
    }
  }
  console.log(true);
};
console.log(checksorted(arr));
