function intersection(arr1, arr2, m, n) {
  let a = 0;
  let b = 0;
  const newArr = [];
  while (a < m && b < n) {
    if (arr1[a] < arr2[b]) {
      a++;
    }
    if (arr1[a] > arr2[b]) {
      b++;
    }
    if (arr1[a] == arr2[b]) {
      newArr.push(arr1[a]);
      a++;
      b++;
    }
  }
  return newArr;
}
const arr1 = [1, 2, 2, 3, 3, 4, 5, 6];
const arr2 = [2, 3, 3, 5, 6, 6, 7];
console.log(intersection(arr1, arr2, arr1.length, arr2.length));
