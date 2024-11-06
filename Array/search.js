function search(val, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        console.log(i);
        break;
      }
    }
//   return arr.indexOf(val);
}
const arr = [20, 30, 40, 50, 60];
console.log(arr);
console.log(search(40, arr))
console.log(arr);
