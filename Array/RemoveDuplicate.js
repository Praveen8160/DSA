function removeDuplicate(nums) {
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }
  console.log(nums);
  return j;
}
const arr = [1,1,2,3,4,5,5,6,6,7,7,8,8,8,9];
arr.length=removeDuplicate(arr)
console.log(arr);
