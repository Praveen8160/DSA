const arr = [20, 40, 50, 60, 70, 30, 20];
function largest(arr) {
  //   let largest = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (largest < arr[i]) {
  //       largest = arr[i];
  //     }
  //   }
  let largest = arr.reduce(
    (max, current) => (current > max ? current : max),
    arr[0]
  );
  //   let largest = Math.max(...arr);

  return largest;
}
console.log(largest(arr));
