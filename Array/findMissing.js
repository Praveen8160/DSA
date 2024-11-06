function findmissing(arr, n) {
    // 1
  //   if (Math.max(...arr) !== n) {
  //     return n;
  //   }
  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //       if (i == arr[j]) {
  //         break;
  //       } else if (i !== arr[j]) {
  //         if (j == n - 1) {
  //           return i;
  //         } else {
  //           continue;
  //         }
  //       }
  //     }
  //   }
  //   return 0;
//   let n = arr.length;

// 2
// let arr2 = new Array(nums.length + 1).fill(0)
//     for (let i = 0; i < arr.length; i++) {
//         arr[nums[i]] = 1
//     }

//     for (let j = 0; j < arr2.length; j++) {
//         if (arr[j] == 0) {
//             return j
//         }
//     }

// 3
  let expectedSum = (n * (n + 1)) / 2;
  console.log(expectedSum)
  let actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

const arr = [0, 2, 3];
console.log(findmissing(arr, arr.length));
