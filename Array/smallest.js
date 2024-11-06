const arr = [20, 40, 50, 60, 70, 30, 10];
function smallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }
  //   let smallest = Math.min(...arr);
  return smallest;
}
console.log(smallest(arr));
