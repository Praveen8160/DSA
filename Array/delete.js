function deletevalue(pos, arr) {
  if (pos > arr.length - 1) {
    throw new Error("enter a vlid input");
  }
    for (let i = pos; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
//   arr.splice(2, 1);
}
const arr = [20, 30, 40, 50, 60];
console.log(arr);
deletevalue(2, arr);
console.log(arr);
