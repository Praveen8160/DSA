const arr1 = [70, 20, 30, 45];
const arr2 = [50, 40];
function merge1(arr1, arr2) {
  // 1
  //   const arr3 = [...arr1, ...arr2];

  // 2
  //   let arr3 = [];
  //   n = arr1.length;
  //   for (let i = 0; i <= n; i++) {
  //     if (i < arr1.length) {
  //       arr3 = [...arr3, arr1[i]];
  //     } else {
  //       for (let i = 0; i <= arr2.length - 1; i++) {
  //         arr3 = [...arr3, arr2[i]];
  //       }
  //     }
  //   }

  return arr3;
}
// console.log(merge1(arr1, arr2));

// 3 using recursion
function merge(arr1, arr2, i, j) {
  if (arr1.length <= i && arr2.length <= j) {
    return [];
  }
  if (arr1.length > i) {
    return [arr1[i]].concat(merge(arr1, arr2, i + 1, j));
  } else if (arr2.length > j) {
    return [arr2[j]].concat(merge(arr1, arr2, i, j + 1));
  }
}
console.log(merge(arr1, arr2, 0, 0));
