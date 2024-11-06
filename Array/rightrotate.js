function ROtateRight(nums, k) {
  //   const arr2 = [];
  let n = nums.length;
  //   for (let i = n - k; i < n + (n - k); i++) {
  //     if (i >= n) {
  //       arr2[i + k - n] = nums[i - n];
  //     } else {
  //       arr2[i + k - n] = nums[i];
  //     }
  //   }
  //   return arr2;
  
  if (n > k) {
    for (i = 0; i < (n - k) / 2; i++) {
      [nums[i], nums[n - k - i - 1]] = [nums[n - k - i - 1], nums[i]];
    }
    for (i = 0; i < k / 2; i++) {
      [nums[n + i - k], nums[n - i - 1]] = [nums[n - i - 1], nums[n + i - k]];
    }
    for (i = 0; i < n / 2; i++) {
      [nums[i], nums[n - i - 1]] = [nums[n - i - 1], nums[i]];
    }
  } else if(n==k) {
    arr = [...arr];
  }
  else if (k > n) {
    for (i = 0; i < n / 2; i++) {
      [nums[i], nums[n - i - 1]] = [nums[n - i - 1], nums[i]];
    }
  }
}
let arr = [1, 2,3,4,5,6,7];
// console.log(ROtateRight(arr, 2));
ROtateRight(arr, 4);
console.log(arr);
arr.reverse()
